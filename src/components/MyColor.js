import React from 'react';


class MyColor extends React.Component {
  ref = React.createRef()
    setColor = () => {
        const h2 = document.querySelector('h2')
        if ( !h2.style.background || h2.style.background === 'red') {
            h2.style.background = 'green'
        } else {
            h2.style.background = 'red'
        }
    }

    componentDidMount() {
        this.setColor()
        console.log(this.ref)
    }

  render () {
 
    return (
      <div>
        <h1 ref={this.ref}>aaaaaaaaaaaaaaaaaaa</h1>
        <hr/>
        <h2 ref={this.props.h2Ref}>aaaaaaaaaaaaaaaaaaa</h2>
        <button onClick={this.setColor}>Color</button>
      </div>
    )
  }
}

export default MyColor;
