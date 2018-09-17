import React, { Component } from 'react'

export class Noticia extends Component {

  render() {

      const { urlToImage, url, title, description, source } = this.props.noticia;

    return (
      <div className="col s12 m6 l4">
        <div className="card">
         <div className="card-image">
            <img src={urlToImage} alt={title} />
         </div>
        </div>
      </div>
    )
  }
}

export default Noticia
