import React from 'react';
// import Input from './Input';


const Card = Inputt => {
    return class CardInput12 extends React.Component {
        render() {
            return (
                <>
                    {<Inputt {...this.props}/>}
                </>
              )
        }
    }
}
// export const CardInput =  Card(Input)
export default Card;
