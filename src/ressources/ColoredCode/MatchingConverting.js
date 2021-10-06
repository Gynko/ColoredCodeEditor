import { Keywords } from "./Keywords";
import parse from "html-react-parser";

export function convertLineBreaksToBr(string) {
  var replacingLineBreaks = string.replace(/\n/g, "<br />");
  return replacingLineBreaks;
}

export function replaceKeywordWithStringedHtml(text, arrays) {
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

export function parseString(string) {
  var findSynthax = replaceKeywordWithStringedHtml(string, Keywords);

  //Only parse if you find a non closed  "<>" like : "<"
  //If not, the parse function gets really upset.
  //I could regex to see how many < there are and how many > there are, and see if number match?
  //I have at once be careful to places where < is used, for example in comparisons or loops!!

  //OUPS: no parsing means no displaying... so
  var parsed = parse(findSynthax);
  return parsed;
}
