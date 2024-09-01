import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

function App() {
  const [text, setText] = useState(`# Welcome to my Markdown Previewer!\n
  -------
  ## This is a sub heading...\n
  ------
  ### And here's some other cool stuff:\n
  ------
  Here comes some code, \`<div></div>\`, between 2 backticks.
  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make a text **bold**... whoa!

Or _italic_.\

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, there are lists
  - Some are bulleted.
    - With differend indentation levels.
      - That look like this.
1. And there are number list too.
2. Use just one's if you want
1. And last but not least, let's not forget embedded images



  `);

  const handleChange = (e) => {
    setText(e.target.value);
  };


  return (
    <div className="App">
      <div className="editor">
        <div className="nav">
          <h1>Editor</h1>
        </div>
        <textarea rows="55" cols="70" value={text} onChange={handleChange} spellCheck={false}></textarea>
      </div>
      <div className="results">
        <div className="nav">
          <h1>Previewer</h1>
        </div>
        <div className="result-display">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
        </div>
        
      </div>
    </div>
  );
}

export default App;
