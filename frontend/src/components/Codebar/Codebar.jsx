import { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

const Codebar = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Initialize CodeMirror
    const editor = CodeMirror.fromTextArea(editorRef.current, {
      mode: "javascript",
      theme: "dracula",
      lineNumbers: true,
      autoCloseBrackets: true,
      autoCloseTags: true,
      lineWrapping: true,  // Enable line wrapping to avoid horizontal overflow
    });

    editor.setSize(null, "100%");

    // Cleanup CodeMirror instance on component unmount
    return () => {
      if (editor) {
        editor.toTextArea();
      }
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-auto">
      <textarea ref={editorRef}></textarea>
    </div>
  );
};

export default Codebar;
