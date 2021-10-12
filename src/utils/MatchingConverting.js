/* eslint-disable eqeqeq */
import { keywords } from "./Keywords";
import parse from "html-react-parser";

function replaceKeywordsWithStringedHtml(text) {
  var stringedHtml = text;
  if (text !== "") {
    for (let i = 0; i < keywords.length; i++) {
      var subArray = keywords[i];
      for (let i = 2; i < subArray.length; i++) {
        if (subArray[1] == "keywords") {
          var regex = new RegExp(subArray[i], "g");
          stringedHtml = stringedHtml.replace(
            regex,
            `<span style="color:${subArray[0]}">${subArray[i]}</span>`
          );
        } else if (subArray[1] == "linebreak") {
          stringedHtml.replace(/\n/g, "<br />");
        }
      }
    }
  }
  return stringedHtml;
}

export function parseString(string) {
  var parsed = parse(replaceKeywordsWithStringedHtml(string));
  return parsed;
}
