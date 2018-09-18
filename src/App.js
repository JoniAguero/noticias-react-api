import React, { Component } from 'react';

import { Header } from "./components/Header";
import { Noticias } from "./components/Noticias";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      noticias: []
    }

  }

  componentDidMount() {
    this.getNoticias();
  }

  getNoticias = () => {
    const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=AR&' +
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
      <div className="contenedor-app"> 
        <div className="container white contenedor-noticias">
          <Header title="Noticias" />
         <Noticias noticias = {this.state.noticias} />
        </div>
      </div>
    );
  }
}

export default App;
