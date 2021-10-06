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

//Parsing is necessary to display colored keywords.
//Problem: when typing <, the parser gets mad 👿
export function parseString(string) {
  var findSynthax = replaceKeywordWithStringedHtml(string, keywords);

  var parsed = parse(findSynthax);
  return parsed;
}
