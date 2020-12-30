import React from 'react';


class Count extends React.Component {
    state = {
        count: 0
    }

    onCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

  render () {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.onCount}>Count</button>
      </div>
    )
  }
}

export default Count;
