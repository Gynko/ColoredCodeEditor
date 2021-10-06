//these styles are driving the behavior of the <color> window, which is
//on top of the textArea window.
//The text displayed in the textArea and the one in code have to be exactly
//on top of each other. THEREFORE, any changes to font size, font, line heights
//and the like have to match!
//Paddings, margins of the keywords have to be prohibited, as they would create
//an unmatch.

export var baseStylings = {
  position: "absolute",
  fontFamily: "Operator Mono",
  top: "0",
  left: "0",
  pointerEvents: "none",
  margin: "0",
  padding: "0",
  wordWrap: "break-word",
  fontSize: "1em",
};
