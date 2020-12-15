import React from 'react';
import PropTypes from 'prop-types';



const Form = (props) => {
  const { onSubmit } = props
  const [value, setValue] = React.useState('')

  const onChange = e => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!onSubmit) return

    const formValue = {
      title: value,
    }
    onSubmit(formValue)
    setValue('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" value={ value } onChange={onChange}/>
      </form>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

Form.propTypes = {
  onSubmit: null
}

export default Form;