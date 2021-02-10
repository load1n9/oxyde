import React from "react";
import MonacoEditor from "react-monaco-editor";
import { saveSync } from "save-file";
import { WhistleLanguageDef } from "./languages/WhistleConfig";
import { LanguageData } from "./scripts/data";
import { convertBlobToBase64 } from "./scripts/carbon";
import files from "./scripts/files"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      theme: "vs-dark",
      language: 0,
    };
  }
  editorWillMount = (monaco) => {
    monaco.languages.register({
      id: "whistle",
    });
    monaco.languages.setMonarchTokensProvider("whistle", WhistleLanguageDef);
  };
  editorDidMount = (editor, monaco) => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("language")) {
      this.setState({
        language: parseInt(params.get("language")),
      });
    }
    if (params.has("code")) {
      this.setState({
        code: atob(params.get("code")),
      });
    }
    console.log("editorDidMount", editor);
    editor.focus();
  };
  onChange = (newValue, e) => {
    sessionStorage.setItem("code", newValue);
  };
  setTheme = () => {
    this.setState({
      theme: this.state.theme === "vs-light" ? "vs-dark" : "vs-light",
      code: sessionStorage.getItem("code"),
    });
  };
  setLanguage = () => {
    if (this.state.language === LanguageData.length - 1) {
      this.setState({
        language: 0,
        code: sessionStorage.getItem("code"),
      });
    } else {
      this.setState({
        language: this.state.language + 1,
        code: sessionStorage.getItem("code"),
      });
    }
  };
  saveFile = () => {
    saveSync(
      sessionStorage.getItem("code"),
      `example.${LanguageData[this.state.language].extension}`
    );
  };
  generateSnapshot = async () => {
    try {
           let codeoutput = encodeURIComponent(sessionStorage.getItem("code"))
           const fetchResult = await fetch(`https://carbonnowsh.herokuapp.com/?code=${codeoutput}&theme=dracula`);
           let output = await convertBlobToBase64(await fetchResult.blob());
           await saveSync(
               output,
               `example.png`
           )


       } catch (error) {
           console.error(error);
       }
  };
  setGitUrl = () => {
    let urlPrompt = prompt("url: ", "ophyon/oxyde/master/src/App.js");
    fetch("https://raw.githubusercontent.com/" + urlPrompt)
      .then((response) => response.text())
      .then((data) => {
        this.setState({
          code: data,
        });
        sessionStorage.setItem("code", data);
      });
  };

  render() {
    const { code, theme, language, fileName, setFileName} = this.state;

    const file = files[fileName];

    const options = {
      selectOnLineNumbers: true,
      roundedSelection: true,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: true,
      cursorBlinking: "blink",
      autoIndent: true,

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
          <span className=" topElement hiddenlang">
            {LanguageData[language].name}
          </span>
          <span className="topElement" onClick={this.setGitUrl}>
            🐈
          </span>
          <span className="topElement" onClick={this.saveFile}>
            💾
          </span>
          <span className="topElement" onClick={this.generateSnapshot}>
            📷
          </span>
          {files.map((e) => (
             <button disabled={fileName === e.name} onClick={() => setFileName(e)}>
                 e
             </button>
           ))}
        </div>
        <MonacoEditor
          height="800"
          //language={LanguageData[language].name}
          //value={code}
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          options={options}
          onChange={this.onChange}
          editorWillMount={this.editorWillMount}
          editorDidMount={this.editorDidMount}
          theme={theme}
        />
      </div>
    );
  }
}

export default App;