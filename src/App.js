import React from 'react';
import HomePage from './components/Redux/pages/HomePage';
import './App.css'
// import MyColor from './components/MyColor';
// import Count from './components/Count';
// import MyHoc from './components/HOC/index';
// // import MyContext from './components/MyContext';
// import MyContext from './components/Context/index';
// import RefInput from './components/Ref/index';


class App extends React.Component {
  state = {
    value: {
      name: 'a',
      gender: 'male'
    }
  }
  myRef = React.createRef()

  onClick = () => {
    this.myRef.current.setColor()
    console.log(this.myRef)
  }

  render () {
    return (
      // <MyContext.Provider value={this.state.value}>
      //   <MyColor ref={this.myRef}/>
      //   <hr/>
      //   <Count ref={this.myRef}/>
      //   <button onClick={this.onClick}>Count App</button>
      //   <hr/>
      //   <hr/>
      //   <MyHoc />
      //   <hr/>
      //   <hr/>
      //   <hr/>
      //   <RefInput />
      // </MyContext.Provider>
      <>
        {/* <MyContext /> */}
        <HomePage />
      </>
    )
  }
}

export default App;
