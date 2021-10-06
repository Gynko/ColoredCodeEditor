import { keywords } from "./Keywords";
import parse from "html-react-parser";

export function convertLineBreaksToBr(string) {
  var replacingLineBreaks = string.replace(/\n/g, "<br />");
  return replacingLineBreaks;
}

//Can probably cut this one in 2, even avoid having convertLineBreaksToBr
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

//Parsing is necessary to display colored keywords.
//Problem: when typing <, the parser gets mad 👿
//Ways to escape?
export function parseString(string) {
  var findSynthax = replaceKeywordWithStringedHtml(string, keywords);
  var parsed = parse(findSynthax);
  return parsed;
}
