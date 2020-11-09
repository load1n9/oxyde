import React from "react";
import MonacoEditor from "react-monaco-editor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `
      function test() {
          console.log("hi")
      }
      `,
      theme: "vs-dark"
    };
  }
  editorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
    editor.focus();
  };
  onChange = (newValue, e) => {
    console.log("onChange", newValue, e);
  };
  setTheme = () => {
    this.setState({
      theme: this.state.theme === "vs-light" ? "vs-dark" : "vs-light"
    });
  };

  render() {
    const { code, theme } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: true,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: true,
      cursorBlinking: "blink"
    };
    return (
      <div class={theme === "vs-light" ? "light" : "dark"}>
        <div>
          <ul className="topElement" onClick={this.setTheme}>
            {theme === "vs-light" ? "🌙" : "☀️"}
          </ul>
        </div>
        <MonacoEditor
          height="800"
          language="javascript"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
          theme={theme}
        />
      </div>
    );
  }
}

export default App;
