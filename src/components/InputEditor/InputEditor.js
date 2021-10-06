/* eslint-disable no-redeclare */
import { useState, useEffect, useRef } from "react";
import "./InputEditor.styles.css";
import parse from "html-react-parser";
import { Keywords } from "../../ressources/ColoredCode/Keywords";

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

  var ref = useRef(null);

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

  function convertLineBreaksToBr(inputString) {
    var replacingLineBreaks = inputString.replace(/\n/g, "<br />");
    return replacingLineBreaks;
  }

  function parseString(string) {
    var findSynthax = replacingKeywordWithStringedHtml(string, Keywords);
    //Only parse if you find a thing not like <thing>
    var parsed = parse(findSynthax);
    return parsed;
  }

  function replacingKeywordWithStringedHtml(text, arrays) {
    var newText = text;
    if (text !== "") {
      for (let i = 0; i < arrays.length; i++) {
        var subArray = arrays[i];
        for (let i = 1; i < subArray.length; i++) {
          var regex = new RegExp(subArray[i], "g");
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
