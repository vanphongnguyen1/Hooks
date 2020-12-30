import React from 'react'
import MyColor from '../MyColor'

export default class CustomTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = null
        this.setTextInputRef = ele => {
            this.textInput = ele
        }

        this.focusTextInput = () => {
            // if(!this.textInput) this.textInput.focus()
            console.log(this.textInput)
        }
    }

    componentDidMount() {
        console.log(this.textInput)
        // this.focusTextInput()

    }

    render() {
        return (
            <>
                <MyColor h2Ref={this.setTextInputRef}/>
                <input type="text" />
                <input type="button" value="Focut" onClick={this.focusTextInput}/>
            </>
        )
    }
}