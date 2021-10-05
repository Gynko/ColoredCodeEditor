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
    setCodeHtmled(
      <code
        dangerouslySetInnerHTML={{ __html: addingBreaks }}
        style={{
          width: heightWidth[0],
          height: heightWidth[1],
          position: "absolute",
          fontFamily: "Operator Mono",
          color: "#ff7070",
          top: "0",
          left: "0",
          pointerEvents: "none",
          fontSize: "1em",
          margin: "0",
          padding: "0",
        }}
      ></code>
    );
  }

  function inputStringToHtml(inputString) {
    var match = inputString.replace(/\n/g, "<br />");
    console.log("match", match);
    return match;
  }

  //var listElements = ["var", "function", "null", "undefined"];

  /*   function matchingKeywords(text) {
    var array = [];
    if (text !== "") {
      for (let i = 0; i < listElements.length; i++) {
        var concat = `${listElements[i]}`;
        var regex = new RegExp(concat, "g");
        var result = [...text.matchAll(regex)];
        if (result.length !== 0) {
          array.push(result);
        }
      }
      array = array.flat();
    }
    return array;
  } */

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
