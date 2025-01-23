import React from "react";
import "@vaadin/rich-text-editor";
import "@vaadin/rich-text-editor/theme/material/vaadin-rich-text-editor.js";

const TextEditor = () => {
  return (
    <>
      <vaadin-rich-text-editor
        placeholder="Start typing..."
        style={{
          "--vaadin-rich-text-editor-selection-background": "purple",
        }}
      ></vaadin-rich-text-editor>
    </>
  );
};

export default TextEditor;
