# Colored code
## A vanilla react component to enhance the presentation of code on our websites.

![Colored Code Editor](https://i.imgur.com/StINA2X.png)

### Features:
* Colored code colors the text that we input, depending on the programing language's keywords.
* You can have a placeholder code, and people can type in code too. You can lock the editing too.
* Reset code to the default placeholder code.
* It features 2 elements: the code editor and the console. Both are optional.
* Optional line count.
* You can change the theme. Vanilla Css for easier sharing?
* Live coloring: we can type in the editor box and keywords are recognised and colored on the go.

* Tab Size Preference - mobile optimizations?

### Component structure:
    .
    ├── src  
        ├── ColoredCode
        │   ├───ColoredCode.js
        │   └───ColoredCode.styles.js
        ├── InputConsole
        │   ├───InputConsole.js
        │   └───InputConsole.styles.js
        └── InputEditor
            ├───InputEditor.js
            └───InputEditor.styles.js

