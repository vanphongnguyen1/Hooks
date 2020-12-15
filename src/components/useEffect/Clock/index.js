import React, { useState, useRef, useEffect } from 'react';

const formatDate = () => {
  const data = new Date()
  const hours = `0${data.getHours()}`.slice(-2)
  const minutes = `0${data.getMinutes()}`.slice(-2)
  const seconds = `0${data.getSeconds()}`.slice(-2)
  return `${hours} : ${minutes} : ${seconds}`
}

const Clock = (props) => {
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const dateNow = new Date()
      const dateString = formatDate(dateNow)
      setTimeString(dateString)
    }, 1000)

    return(
      () => {
        clearInterval(clockInterval)
      }
    )
  }, [])

  return (
    <>
      <p style={ {fontSize: '30px'}}>{ timeString }</p>
    </>
  );
}

export default Clock;