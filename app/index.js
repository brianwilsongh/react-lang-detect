import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class HelloWorld extends React.Component {

    constructor(props){
      super(props)
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.detectedLanguage = this.detectedLanguage.bind(this);
    }
    handleKeyDown(e){
      // console.log("pressed : " + String.fromCharCode(e.keyCode));
      if (e.target.value.length > 5){
        this.detectedLanguage(e.target.value)
      }
    }

    detectedLanguage(text){
      // console.log("gonna get the lang")
      var prediction = langid.rank(text)[0]
      console.log(langid.rank(text)[0])
      var display = this.refs["displayLang"]
      display.textContent = prediction.lang
      // const config = {
      //   headers: {'Access-Control-Allow-Origin': '*'},
      //   data: { q: text}
      // }
      // axios.post('http://172.28.200.131:9008/detect', config).then(response => console.log(response))
    }
    render() {
          return (
                  <div>
                    Talk to me in any language you want!
                    <input type="text" onKeyDown={this.handleKeyDown} />
                    <h2 ref="displayLang"></h2>
                  </div>
                )
        }
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
