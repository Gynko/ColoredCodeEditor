import { keywords } from "./Keywords";
import parse from "html-react-parser";

export function convertLineBreaksToBr(string) {
  var replacingLineBreaks = string.replace(/\n/g, "<br />");
  return replacingLineBreaks;
}

export function replaceKeywordWithStringedHtml(text, array) {
  var stringedHtml = text;
  if (text !== "") {
    for (let i = 0; i < array.length; i++) {
      var subArray = array[i];
      for (let i = 1; i < subArray.length; i++) {
        var regex = new RegExp(subArray[i], "g");
        stringedHtml = stringedHtml.replace(
          regex,
          `<span style="color:${subArray[0]}">${subArray[i]}</span>`
        );
      }
    }
  }
  return stringedHtml;
}

export function parseString(string) {
  var findSynthax = replaceKeywordWithStringedHtml(string, keywords);

  //Only parse if you find a non closed  "<>" like : "<"
  //If not, the parse function gets really upset.
  //I could regex to see how many < there are and how many > there are, and see if number match?
  //I have at once be careful to places where < is used, for example in comparisons or loops!!

  //OUPS: no parsing means no displaying... so
  var parsed = parse(findSynthax);
  return parsed;
}
