import React, { Component } from 'react';
import { Noticias } from "./components/Noticias";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      noticias: {}
    }

  }

  componentDidMount() {
    this.getNoticias();
  }

  getNoticias() {
    const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=ar&' +
      'apiKey=1d01268cb056446083eefeee93e25036';
    const req = new Request(url);
    fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then(noticias => { 
        this.setState({
          noticias: noticias.articles
        })
       });
  }

  render() {
    return (
      <div className="App">
        <Noticias />
      </div>
    );
  }
}

export default App;
