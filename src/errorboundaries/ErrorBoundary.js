import React from "react";
import "./error_boundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, info) {
    this.setState({ error: error, info: info });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="center">
          <div className="error-boundary">
            <h1>Something went wrong.</h1>
            <button onClick={() => window.location.reload(false)}>
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
