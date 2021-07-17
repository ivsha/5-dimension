import React, { Component } from 'react'

export default class Sublifecycle extends Component {

componentWillUnmount(){
    this.props.ubahMakanan("Sate")
}

    render() {
        return (
            <div>
               <h2>Component sub lifecycle</h2> 
            </div>
        )
    }
}
