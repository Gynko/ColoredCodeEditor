# Colored code

## A react component to enhance the presentation of code on our websites.

![Colored Code Editor](https://i.imgur.com/StINA2X.png)

### State of development:

Colored code is in an early phase of development and therefore not suitable to any production build.

### Features:

- Colored code colors the text that we input on the fly, depending on the keywords.
- People can change the theme.
- You can have a placeholder code, and people can type in code too. You can edit lock.
- People can reset code to the default placeholder code.
- It features 2 elements: the code editor and the console. Both are optional.
- Optional line count.
- Tab Size Preferences - mobile optimizations.

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

### Dependencies:

html-react-parser v1.4.0
