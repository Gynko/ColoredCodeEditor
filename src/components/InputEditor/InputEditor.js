import "./InputEditor.styles.css";

//TODO:
//Having an array of string elements that we want to be styled specifically.
//Having a function that, on every keystroke, will check if there is in the input text a string matching an element in the array. Regex.
//From there, when matching, figuring out how to somehow style the text displayed in the input text.
//Problem: not sure i can style directly the input value on the fly?
//Possibility1: Can I Cut in 2? => The input text where we type & An output html that is our visual feedback "on top of where we type" ?

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

  var text =
    "Oh a Primitive Type is in my text. How Null ! I don't want to be Undefined by this feature.. Primitive Type ";

  function analyzeText(text) {
    var array = [];
    for (let i = 0; i < listElements.length; i++) {
      var concat = `${listElements[i]}`;
      var regex = new RegExp(concat, "g");
      var result = [...text.matchAll(regex)];
      if (Array.isArray(result) && result.length !== 0) {
        array.push(result);
      }
    }
    array = array.flat();
    console.log(array);
    return `I found these words: ${array.flat()}`;
  }

  function convertTextToHtml(text, element) {
    //The array that is returned by analyzeText contains, for each element, an "index": a number of where it found the match.
    //I need then to remove the string of the match and replace it with some styled html.
    //To remove, i need start of the input and its end. If index start is 9 and match length is 16 characters, index end is 25.
    //Then i add appropriate html at index start.
    var outputHtml = "nothing yet";
    return outputHtml;
  }

  return (
    <div>
      <p>{text}</p>
      <input className="input-codeeditor" placeholder="code" type="text" />
      <p>{analyzeText(text)}</p>
      <p>{convertTextToHtml()}</p>
    </div>
  );
}

export default InputEditor;
