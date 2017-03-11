import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';
import GifList from './components/GifList';
import request from 'superagent';

class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      gifs: []
    }
  }
  
  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
    
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }
  
  render() {
    return (
      <div className="greeting">
        <SearchBar onTermChange={term => this.handleTermChange(term)} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
  
}


ReactDOM.render(
  <App />, document.getElementById('app')
);
