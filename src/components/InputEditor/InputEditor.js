/* eslint-disable no-redeclare */
import { useState, useEffect, useRef } from "react";
import "./InputEditor.styles.css";
import parse from "html-react-parser";

function InputEditor() {
  var [inputCode, setInputCode] = useState();
  var [heightWidth, setHeightWidth] = useState([0, 0]);
  var [codeHtmled, setCodeHtmled] = useState(
    <code
      style={{
        width: heightWidth[0],
        height: heightWidth[1],
        position: "absolute",
        fontFamily: "Operator Mono",
        color: "brown",
        top: "0",
        left: "0",
        pointerEvents: "none",
        fontSize: "1em",
        margin: "0",
        padding: "0",
      }}
    >
      {inputCode}
    </code>
  );

  var ref = useRef(null);

  useEffect(() => {
    setHeightWidth([ref.current.clientHeight, ref.current.clientWidth]);
  }, []);

  function onInput(event) {
    setInputCode(event.target.value);
    setHeightWidth([ref.current.clientWidth, ref.current.clientHeight]);
    var addingBreaks = inputStringToHtml(event.target.value);
    console.log(addingBreaks);
    setCodeHtmled(
      <code
        style={{
          width: heightWidth[0],
          height: heightWidth[1],
          position: "absolute",
          fontFamily: "Operator Mono",
          top: "0",
          left: "0",
          pointerEvents: "none",
        }}
      >
        {addingBreaks}
      </code>
    );
  }

  function inputStringToHtml(inputString) {
    var replacingLineBreaks = inputString.replace(/\n/g, "<br />");
    var matches = parse(matchingKeywords(replacingLineBreaks));
    return matches;
  }

  var jsElements = ["var", "for", "let", "const"];

  var htmlElements = ["div", "input"];

  function matchingKeywords(text) {
    var newText = text;
    if (text !== "") {
      for (let i = 0; i < jsElements.length; i++) {
        var concat = `${jsElements[i]}`;
        var regex = new RegExp(concat, "g");
        newText = newText.replace(
          regex,
          `<span style="color:#c78de4">${jsElements[i]}</span>`
        );
      }
    }
    if (text !== "") {
      for (let i = 0; i < htmlElements.length; i++) {
        var concat = `${htmlElements[i]}`;
        var regex = new RegExp(concat, "g");
        newText = newText.replace(
          regex,
          `<span style="color:#f0654e">${htmlElements[i]}</span>`
        );
      }
    }
    return newText;
  }

  function resize() {
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
        onMouseUp={resize}
        onMouseMove={resize}
      />
      {codeHtmled}
    </div>
  );
}

export default InputEditor;
