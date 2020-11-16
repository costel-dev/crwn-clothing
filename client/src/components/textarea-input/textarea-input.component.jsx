import React from "react";
import "./textarea-input.styles.scss";

const TextAreaInput = () => {
  return (
    <div className="textArea">
      <label htmlFor="textinput">Your message goes here</label>
      <br />
      <textarea id="textinput" rows="3" cols="50" required />
    </div>
  );
};

export default TextAreaInput;
