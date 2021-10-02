import "./InputEditor.styles.css";

//TODO:
//Having an array of string elements that we want to be styled specifically.
//Having a function that, on every keystroke, will check if there is in the input text a string matching an element in the array. Regex.
//From there, when matching, figuring out how to somehow style the text displayed in the input text.

function InputEditor() {
  var listElements = [
    "Primitive Type",
    "Object",
    "Null",
    "String",
    "Number",
    "Symbol",
    "Undefined",
  ];

  return <input className="input-codeeditor" placeholder="code" />;
}

export default InputEditor;
