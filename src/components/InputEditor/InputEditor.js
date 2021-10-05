import { useState, useEffect, useRef } from "react";
import "./InputEditor.styles.css";

function InputEditor() {
  var [inputCode, setInputCode] = useState("gekki");
  var [heightWidth, setHeightWidth] = useState([0, 0]);
  var ref = useRef(null);

  useEffect(() => {
    setHeightWidth([ref.current.clientHeight, ref.current.clientWidth]);
  }, []);

  var listElements = [
    "Primitive Type",
    "Object",
    "Null",
    "String",
    "Number",
    "Symbol",
    "Undefined",
  ];

  function onInput(event) {
    setInputCode(event.target.value);
    setHeightWidth([ref.current.clientWidth, ref.current.clientHeight]);
  }

  function matchingKeywords(text) {
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
  }

  function resize() {
    setHeightWidth([ref.current.clientWidth, ref.current.clientHeight]);
    console.log(heightWidth);
  }

  return (
    <div>
      <div className="container">
        <textarea
          className="input-codeeditor"
          placeholder={inputCode}
          type="text"
          ref={ref}
          onInput={onInput}
          onMouseUp={resize}
          onMouseMove={resize}
        />
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
          }}
        >
          {inputCode}
        </code>
      </div>
      <p>
        {heightWidth.map((coord) => (
          <span className="coord">{coord}</span>
        ))}
      </p>
    </div>
  );
}

export default InputEditor;
