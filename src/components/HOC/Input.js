import React from 'react';
import Card from './Card';


class Input extends React.Component {
    state = {
        value: '',
        errMessage: ''
    }

    handleError = (value) => {
        this.setState({
            errMessage: ''
        })

        if (this.props.type==="text" && value.length > 10) {
            this.setState({
                errMessage: `Toi da ${this.props.max} ky tu`
            })
        }
        if (this.props.type==="number" &&value > 10) {
            this.setState({
                errMessage: `Gia tri toi da la ${this.props.max}`
            })

        }
      
    }

    onChange = e => {
        const {value} = e.target
        this.handleError(value)
        this.setState({
            value
        })
    }

  render () {
    const {errMessage} = this.state
    return (
      <div>
        {this.props.label}
        <input type={this.props.type} onChange={this.onChange}/>
        {errMessage && <p>{errMessage}</p>}
      </div>
    )
  }
}

export default Card(Input);