import React, { Component } from 'react'

export class Noticia extends Component {

  render() {

      const { urlToImage, url, title, description, source } = this.props.noticia;

    return (
      <div className="col s12 m6 l4">
        <div className="card">
         <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
         </div>
         <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
         </div>
         <div className="card-action">
            <a href={url} target="_blank" className="waves-effect waves-ligth btn"> LEER </a>
         </div>
        </div>
      </div>
    )
  }
}

export default Noticia
