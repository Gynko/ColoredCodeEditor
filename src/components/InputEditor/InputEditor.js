import { useState, useEffect, useRef } from "react";
import "./InputEditor.styles.css";
import {
  convertLineBreaksToBr,
  parseString,
} from "../../utils/MatchingConverting";

function InputEditor() {
  var [inputCode, setInputCode] = useState();
  var [heightWidth, setHeightWidth] = useState([0, 0]);

  var baseStyleColoredWindow = {
    width: heightWidth[0],
    height: heightWidth[1],
    position: "absolute",
    fontFamily: "Operator Mono",
    top: "0",
    left: "0",
    pointerEvents: "none",
    fontSize: "1em",
    margin: "0",
    padding: "0",
    wordWrap: "break-word",
  };

  var [stringHtmled, setStringHtmled] = useState(
    <code style={baseStyleColoredWindow}>{inputCode}</code>
  );

  useEffect(() => {
    setHeightWidth([ref.current.clientHeight, ref.current.clientWidth]);
  }, []);

  function onInput(event) {
    setInputCode(event.target.value);
    setHeightWidth([ref.current.clientWidth, ref.current.clientHeight]);
    var addingBreaks = convertLineBreaksToBr(event.target.value);
    var parsed = parseString(addingBreaks);
    setStringHtmled(<code style={baseStyleColoredWindow}>{parsed}</code>);
  }

  var ref = useRef(null);

  function resizeToMatchRef() {
    setHeightWidth([ref.current.clientWidth, ref.current.clientHeight]);
  }

  return (
    <div className="container-inputeditor">
      <textarea
        className="input-codeeditor"
        placeholder={inputCode}
        type="text"
        ref={ref}
        onInput={onInput}
        onMouseUp={resizeToMatchRef}
        onMouseMove={resizeToMatchRef}
      />
      {stringHtmled}
    </div>
  );
}

export default InputEditor;
