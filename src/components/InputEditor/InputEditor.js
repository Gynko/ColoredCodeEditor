import { useState, useEffect, useRef } from "react";
import "./InputEditor.styles.css";

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
        dangerouslySetInnerHTML={{ __html: addingBreaks }}
        style={{
          width: heightWidth[0],
          height: heightWidth[1],
          position: "absolute",
          fontFamily: "Operator Mono",
          top: "0",
          left: "0",
          pointerEvents: "none",
        }}
      />
    );
  }

  function inputStringToHtml(inputString) {
    var replacingLineBreaks = inputString.replace(/\n/g, "<br />");
    var matches = matchingKeywords(replacingLineBreaks);
    return matches;
  }

  var listElements = [
    "var",
    "function",
    "null",
    "undefined",
    "for",
    "let",
    "const",
  ];

  var htmlElements = ["div", "input"];

  function matchingKeywords(text) {
    var newText = text;
    if (text !== "") {
      for (let i = 0; i < listElements.length; i++) {
        var concat = `${listElements[i]}`;
        var regex = new RegExp(concat, "g");
        newText = newText.replace(
          regex,
          `<span style="color:#c78de4">${listElements[i]}</span>`
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
