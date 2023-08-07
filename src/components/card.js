
import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col pt-2">
                <div className="card" style={{ width: '20rem', textAlign: 'center', border: 'none' }}>
                    <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary" style={{ backgroundColor: "#a8dadc", color: "#457b9d", border: 'none', fontWeight:'bold'  }} >Add <span className='badge badge-light'>{this.props.card.quantita}</span></button>
                    <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                    <div className="card-body mb-4" style={{ backgroundColor: "#a8dadc", borderRadius: '5px', color: '#457b9d', fontWeight:'bold' }}>
                        <h5 className="card-title">{this.props.card.nome}Rool</h5>
                        <p className="card-text">€{this.props.card.prezzo}</p>
                        <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn" style={{ backgroundColor: "#f1faee", border: 'none', fontWeight:'bold', color:'#457b9d'  }}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
