import React from "react";
import MonacoEditor from "react-monaco-editor";
import { saveSync } from "save-file";
import { LanguageData } from "./data"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: `
      function test() {
          console.log("hi")
      }
      `,
            theme: "vs-dark",
            language: 0
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
    setLanguage = () => {
        console.log("current: "+this.state.language)
        console.log("length: "+LanguageData.length)
        if (this.state.language === LanguageData.length-1) {
            this.setState({
                language: 0
            });
        } else {
            this.setState({
                language: this.state.language+1
            });
        }
    }
    saveFile = () => {

        saveSync(this.state.code, "example.txt");
    };
    setGitUrl = () => {
        let urlPrompt = prompt("url: ", "ophyon/oxyde/master/src/App.js")
        fetch("https://raw.githubusercontent.com/" + urlPrompt)
            .then((response) => response.text())
            .then((data) => this.setState({ code: data }));
    }

    render() {
        const { code, theme, language } = this.state;
        const options = {
            selectOnLineNumbers: true,
            roundedSelection: true,
            readOnly: false,
            cursorStyle: "line",
            automaticLayout: true,
            cursorBlinking: "blink"
        };
        return (
            <div className={theme === "vs-light" ? "light" : "dark"}>
                <div id="buttons">
                    <span className="topElement" onClick={this.setTheme}>
                        {theme === "vs-light" ? "🌞" : "🌛"}
                    </span>
                    <span className="topElement" onClick={this.setLanguage}>
                        {LanguageData[language].icon}
                    </span>
                    <span className="topElement" onClick={this.setGitUrl}>
                        🐈
          </span>
                    <span className="topElement" onClick={this.saveFile}>
                        💾
          </span>
                </div>
                <MonacoEditor
                    height="800"
                    language={LanguageData[language].name}
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
