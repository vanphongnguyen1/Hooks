import React from 'react';
// import Card, {CardInput} from './Card';
import Card, {CardInputt} from './Input';

class MyHoc extends React.Component {

  render () {
    return (
      <div>
        <h1>HOC</h1>
        <Card type="text" max='10' label="nhap name"/>
        <Card type="number" max = {10} label="nhap Tuoi"/>
        {/* <Input type="text" max='10' label="nhap name"/>
        <Input type="number" max = {10} label="nhap Tuoi"/> */}

      </div>
    )
  }
}

export default MyHoc;
