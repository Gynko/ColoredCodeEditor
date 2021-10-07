//these styles are driving the look and behaviours of the <color> window, which is
//superposed to the textArea window.
//The text displayed in the textArea and the one in code have to be exactly
//superposed. THEREFORE, any changes to font size, font, line heights
//and the like have to match!
//Paddings, margins of the keywords have to be prohibited, as they would create
//an unmatch.

export var baseStylingsCode = {
  position: "absolute",
  fontFamily: "Operator Mono",
  top: "0",
  left: "0",
  pointerEvents: "none",
  margin: "0",
  padding: "0",
  fontSize: "1em",
  whiteSpace: "inherit",
  wordWrap: "inherit",
};

export var baseStylingsPre = {
  position: "absolute",
  top: "0",
  left: "0",
  pointerEvents: "none",
  margin: "0",
  padding: "0",
  whiteSpace: "pre-wrap",
  wordWrap: "normal",
};
