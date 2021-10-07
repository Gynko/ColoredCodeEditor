import { keywords } from "./Keywords";
import parse from "html-react-parser";

export function convertLineBreaksToBr(string) {
  var replacingLineBreaks = string.replace(/\n/g, "<br />");
  return replacingLineBreaks;
}

//Can probably cut this one in 2, even avoid having convertLineBreaksToBr
export function replaceKeywordWithStringedHtml(text) {
  var stringedHtml = text;
  if (text !== "") {
    for (let i = 0; i < keywords.length; i++) {
      var subArray = keywords[i];
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
  var addingBreaks = convertLineBreaksToBr(string);
  var parsed = parse(replaceKeywordWithStringedHtml(addingBreaks));
  return parsed;
}
