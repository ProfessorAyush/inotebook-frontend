import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold mb-3">About iNotebook</h1>
          <p className="lead text-muted">
            Your personal space to capture ideas, organize thoughts, and stay productive
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h2 className="fw-bold mb-4">What is iNotebook?</h2>
              <p className="lead mb-4">
                iNotebook is a modern, cloud-based note-taking application designed to help you
                capture and organize your thoughts effortlessly. Whether you're a student,
                professional, or creative thinker, iNotebook provides a simple yet powerful
                platform to manage your notes.
              </p>
              <p className="text-muted">
                Built with cutting-edge technologies, iNotebook ensures your notes are always
                accessible, secure, and synchronized across all your devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="row mb-5">
        <div className="col-12 mb-4">
          <h2 className="fw-bold text-center">Key Features</h2>
          <p className="text-center text-muted">Everything you need to stay organized</p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {/* Feature 1 */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <i className="bi bi-cloud-check text-primary" style={{ fontSize: "3rem" }}></i>
              </div>
              <h5 className="card-title fw-bold">Cloud Storage</h5>
              <p className="card-text text-muted">
                Your notes are securely stored in the cloud and accessible from anywhere,
                anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <i className="bi bi-shield-check text-success" style={{ fontSize: "3rem" }}></i>
              </div>
              <h5 className="card-title fw-bold">Secure & Private</h5>
              <p className="card-text text-muted">
                Your data is encrypted and protected. Only you have access to your personal
                notes.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <i className="bi bi-pencil-square text-warning" style={{ fontSize: "3rem" }}></i>
              </div>
              <h5 className="card-title fw-bold">Easy to Use</h5>
              <p className="card-text text-muted">
                Simple and intuitive interface makes creating and managing notes a breeze.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <i className="bi bi-tags text-danger" style={{ fontSize: "3rem" }}></i>
              </div>
              <h5 className="card-title fw-bold">Organize with Tags</h5>
              <p className="card-text text-muted">
                Categorize your notes with custom tags for quick and easy organization.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <i className="bi bi-lightning text-info" style={{ fontSize: "3rem" }}></i>
              </div>
              <h5 className="card-title fw-bold">Fast & Responsive</h5>
              <p className="card-text text-muted">
                Lightning-fast performance ensures smooth experience across all devices.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 6 */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <i className="bi bi-phone text-secondary" style={{ fontSize: "3rem" }}></i>
              </div>
              <h5 className="card-title fw-bold">Mobile Friendly</h5>
              <p className="card-text text-muted">
                Fully responsive design works seamlessly on desktop, tablet, and mobile.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card bg-light border-0">
            <div className="card-body p-5">
              <h3 className="fw-bold text-center mb-4">Built With Modern Technology</h3>
              <div className="row text-center">
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h5 className="fw-bold text-primary">React</h5>
                    <p className="text-muted small mb-0">Frontend Framework</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h5 className="fw-bold text-success">Node.js</h5>
                    <p className="text-muted small mb-0">Backend Runtime</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h5 className="fw-bold text-info">MongoDB</h5>
                    <p className="text-muted small mb-0">Database</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h5 className="fw-bold text-warning">Express.js</h5>
                    <p className="text-muted small mb-0">Web Framework</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="row">
        <div className="col-12">
          <div className="card bg-primary text-white border-0 shadow-lg">
            <div className="card-body text-center p-5">
              <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
              <p className="lead mb-4">
                Join thousands of users who trust iNotebook to keep their ideas organized.
              </p>
              <a href="/signup" className="btn btn-light btn-lg px-5">
                Create Free Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;