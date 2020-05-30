import React, { Component } from 'react';

import './App.css';


let marked = require("marked")

class App extends Component {
  state = {
    markdown: 
    ('# hello \n## bro \n[Duck Duck Go](https://duckduckgo.com)'+
    '\nmy lovely \n\n    <html>\n     <head>\n     </head>\n    </html>\n\n1. First item \nI really like using Markdown. \n2. Second item \n3. Third item \n4. Fourth item' + 
    '\n> Dorothy followed her through many of the beautiful rooms in her castle. \n> \n> The Witch bade her clean the pots and kettles and sweep \n\n![Philadelphia\'s Magic Gardens. This place was so cool!](https://d33wubrfki0l68.cloudfront.net/70a143fdf134aacde3740662a2a47a2a1ee0d216/276c9/assets/images/shiprock.jpg "Philadelphia\'s Magic Gardens")'+
    '\n\n **bold text** \n__bold text__ \n*cat\'s meow* \n>> The Witch bade her clean the pots \n>  *Everything* is going according to **plan**.' + 
    '- First item \n- Second item \n- Third item \n- Fourth item \n*   This is the first list item. \n  ![Tux, the Linux mascot](/assets/images/tux.png) \n\n`nano` \n``Use `code` in your Markdown file.``    ' +
    '\n<https://www.markdownguide.org> \n<fake@example.com> \n <pre><code>babe</code></pre>' )
  }

  inputChange =(v) =>{
    this.setState({markdown : v.target.value})
  }

  render(){

    console.log(this.state.markdown);

  return (
    <div className="App">
   
    <div className= "form-group container" >
      <label ><h2>Input Markup</h2></label>
      <textarea id="editor" placeholder ='Enter input' className='form-control' value = {this.state.markdown} onChange={this.inputChange} ></textarea>
    </div>


    <div>
      <h1>MarkDown Output</h1>
      <div></div>
    </div>
      <div id="preview" dangerouslySetInnerHTML = {{__html :marked(this.state.markdown) }} ></div>
    </div>
  );
}
}
export default App;
