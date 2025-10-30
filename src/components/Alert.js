import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  };

  // Get icon based on alert type
  const getIcon = (type) => {
    switch (type) {
      case "success":
        return "bi-check-circle-fill";
      case "danger":
      case "error":
        return "bi-exclamation-triangle-fill";
      case "warning":
        return "bi-exclamation-circle-fill";
      case "info":
        return "bi-info-circle-fill";
      default:
        return "bi-info-circle-fill";
    }
  };

  // Normalize alert type (handle 'error' -> 'danger')
  const alertType = props.alert?.type === "error" ? "danger" : props.alert?.type;

  return (
    <div className="container-fluid px-0">
      {props.alert && (
        <div
          className={`alert alert-${alertType} alert-dismissible fade show mb-0 rounded-0 border-0 shadow-sm`}
          role="alert"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1050,
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div className="container d-flex align-items-center">
            <i className={`bi ${getIcon(alertType)} me-2`} style={{ fontSize: "1.2rem" }}></i>
            <div className="flex-grow-1">
              <strong>{capitalize(alertType)}</strong>: {props.alert.msg}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Alert;