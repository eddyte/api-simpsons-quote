import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateQuote from './GenerateQuote'
import DisplayQuote from './DisplayQuote'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:  []
    };
  };

  
  getQuote() {
    // Récupération de la quote via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote:  data[0].quote,
          
        });
    });
}

  
  render() {
    return (
      <div className="App">
        <GenerateQuote  selectQuote={() =>  this.getQuote()} />
<DisplayQuote  quote={this.state.quote}  />
      </div>
    );
  }
}

export default App;
