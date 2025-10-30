import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const wordCount = note.edescription.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (note.etitle.length < 3 || wordCount < 5) {
      return;
    }
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hidden Modal Trigger */}
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      >
        Launch modal
      </button>

      {/* Edit Note Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title fw-bold" id="editModalLabel">
                <i className="bi bi-pencil-square me-2"></i>
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <form>
                {/* Title Field */}
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label fw-semibold">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    value={note.etitle}
                    id="etitle"
                    name="etitle"
                    onChange={onChange}
                    placeholder="Enter note title (min 3 characters)"
                    minLength={3}
                    required
                  />
                </div>

                {/* Description Field */}
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label fw-semibold">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    name="edescription"
                    value={note.edescription}
                    id="edescription"
                    onChange={onChange}
                    placeholder="Enter note description (min 5 words)"
                    rows="4"
                    required
                  ></textarea>
                </div>

                {/* Tag Field */}
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label fw-semibold">
                    Tag
                  </label>
                  <input
                    type="text"
                    name="etag"
                    className="form-control"
                    value={note.etag}
                    id="etag"
                    onChange={onChange}
                    placeholder="e.g., personal, work, important"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer border-0 bg-light">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-primary"
                disabled={
                  note.etitle.length < 3 || 
                  note.edescription.trim().split(/\s+/).filter(word => word.length > 0).length < 5
                }
              >
                <i className="bi bi-check-lg me-1"></i>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Note Section */}
      <AddNote />

      {/* Notes Display Section */}
      <div className="row my-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0">
              <i className="bi bi-journal-text me-2"></i>
              Your Notes
            </h2>
            <span className="badge bg-primary rounded-pill">
              {notes.length} {notes.length === 1 ? "Note" : "Notes"}
            </span>
          </div>

          {/* Empty State */}
          {notes.length === 0 && (
            <div className="text-center py-5">
              <div className="mb-3">
                <i className="bi bi-journal-x" style={{ fontSize: "4rem", color: "#6c757d" }}></i>
              </div>
              <h4 className="text-muted">No notes yet</h4>
              <p className="text-muted">Create your first note to get started!</p>
            </div>
          )}

          {/* Notes Grid */}
          <div className="row g-3">
            {notes.map((note) => {
              return (
                <Noteitem key={note._id} note={note} updateNote={updateNote} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;