/* eslint-disable no-redeclare */
import { useState, useEffect, useRef } from "react";
import "./InputEditor.styles.css";
import parse from "html-react-parser";

function InputEditor() {
  var [inputCode, setInputCode] = useState();
  var [heightWidth, setHeightWidth] = useState([0, 0]);
  var [stringHtmled, setStringHtmled] = useState(
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
    var addingBreaks = lineBreaksConvertToBr(event.target.value);
    console.log(addingBreaks);
    setStringHtmled(
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

  function lineBreaksConvertToBr(inputString) {
    var replacingLineBreaks = inputString.replace(/\n/g, "<br />");
    var matches = matchingAndReplacingKeywords(replacingLineBreaks, elements);
    var parsed = parse(matches);
    console.log(matches);
    return parsed;
  }

  var elements = [
    ["#c78de4", "var", "for", "let", "const"],
    ["#f0654e", "div", "input"],
    ["#6eafff", "function"],
  ];

  function matchingAndReplacingKeywords(text, array) {
    var newText = text;

    if (text !== "") {
      for (let i = 0; i < array.length; i++) {
        var subArray = array[i];
        for (let i = 1; i < subArray.length; i++) {
          var concat = `${subArray[i]}`;
          var regex = new RegExp(concat, "g");
          newText = newText.replace(
            regex,
            `<span style="color:${subArray[0]}">${subArray[i]}</span>`
          );
        }
      }
    }
    return newText;
  }

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
