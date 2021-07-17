import React, { Component } from 'react'
import './App.css'
import Operan from './Operan.js'

export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }

    gantiMakanan = (makanan_baru) =>{
        this.setState({
            makanan : makanan_baru
        })
    }

    render() {
        return (
            <div class="Body">
                <h2>{this.state.makanan}</h2>
                <button onClick={()=>this.gantiMakanan('Soto')}>Ganti Makanan</button>
                <Operan makanan = {this.state.makanan} gantiMakanan={this.gantiMakanan} />
            </div>
        )
    }
}
