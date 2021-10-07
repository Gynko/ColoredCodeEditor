/* eslint-disable eqeqeq */
import { useState, useEffect, useRef } from "react";
import "./InputEditor.styles.css";
import { parseString } from "../../utils/MatchingConverting";
import { baseStylingsCode, baseStylingsPre } from "../../utils/BaseStyling";

function InputEditor() {
  var [inputCode, setInputCode] = useState();
  var [widthHeight, setwidthHeight] = useState([0, 0]);

  var drivenStyles = {
    width: widthHeight[0],
    height: widthHeight[1],
  };
  var baseStyleColoredWindow = { ...drivenStyles, ...baseStylingsCode };

  var [stringHtmled, setStringHtmled] = useState(
    <code style={baseStyleColoredWindow}>{inputCode}</code>
  );

  useEffect(() => {
    setwidthHeight([ref.current.clientWidth, ref.current.clientHeight]);
  }, []);

  function onInput(event) {
    setInputCode(event.target.value);
    var parsed = parseString(event.target.value);
    setStringHtmled(<code style={baseStyleColoredWindow}>{parsed}</code>);
    console.log(inputCode);
  }

  var ref = useRef(null);

  function resizeToMatchRef() {
    setwidthHeight([ref.current.clientWidth, ref.current.clientHeight]);
  }

  function addTab(event) {
    // keyCode 9 is Tab Key
    if (event.keyCode == 9) {
      event.preventDefault();
      //Need to figure out where the caret is
      var val = ref.current.value;
      var start = ref.current.selectionStart;
      var end = ref.current.selectionEnd;
      ref.current.value = val.substring(0, start) + "\t" + val.substring(end);
      ref.current.selectionStart = ref.current.selectionEnd = start + 1;
      var parsed = parseString(event.target.value);
      setStringHtmled(<code style={baseStyleColoredWindow}>{parsed}</code>);
    }
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
        onKeyDown={addTab}
      />
      <pre style={baseStylingsPre}>{stringHtmled}</pre>
    </div>
  );
}

export default InputEditor;
