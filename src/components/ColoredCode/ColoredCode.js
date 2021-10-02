import InputConsole from "../InputConsole/InputConsole";
import InputEditor from "../InputEditor/InputEditor";
import "./ColoredCode.styles.css";

function ColoredCode() {
  return (
    <div className="layout-editor-console">
      <InputEditor />
      <InputConsole />
    </div>
  );
}

export default ColoredCode;
