import { useState, useEffect, useRef } from "react";
import "./InputEditor.styles.css";
import {
  convertLineBreaksToBr,
  parseString,
} from "../../utils/MatchingConverting";
import { baseStylings } from "../../utils/BaseStyling";
import sanitizeHtml from "sanitize-html";

function InputEditor() {
  var [inputCode, setInputCode] = useState();
  var [widthHeight, setwidthHeight] = useState([0, 0]);

  var drivenStyles = {
    width: widthHeight[0],
    height: widthHeight[1],
  };
  var baseStyleColoredWindow = { ...drivenStyles, ...baseStylings };

  var [stringHtmled, setStringHtmled] = useState(
    <code style={baseStyleColoredWindow}>{inputCode}</code>
  );

  useEffect(() => {
    setwidthHeight([ref.current.clientWidth, ref.current.clientHeight]);
  }, []);

  function onInput(event) {
    setInputCode(event.target.value);
    var addingBreaks = convertLineBreaksToBr(event.target.value);
    var parsed = parseString(addingBreaks);
    console.log(
      sanitizeHtml(event.target.value, {
        allowedTags: false,
      })
    );
    setStringHtmled(<code style={baseStyleColoredWindow}>{parsed}</code>);
  }

  var ref = useRef(null);

  function resizeToMatchRef() {
    setwidthHeight([ref.current.clientWidth, ref.current.clientHeight]);
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
