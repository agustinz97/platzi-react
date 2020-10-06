import React from "react";

import "./styles/PageError.css";

export default function PageError(props) {
  return (
    <div className="PageError">
      <span role="img" aria-label="Error Emoji">
        ❌
      </span>
      {props.error.message}
      <span role="img" aria-label="Error Emoji">
        ❌
      </span>
    </div>
  );
}
