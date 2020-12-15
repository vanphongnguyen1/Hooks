import React, { useState, useRef } from 'react';

const SearchPosts = (props) => {
  const { onSubmit } = props
  const [searchPost, setSearchPost] = useState('')
  const searchTimePush = useRef(null)

  const handleChange = e => {
    const { value } = e.target
    setSearchPost(value)

    if (!value) return

    if (searchTimePush.current) {
      clearTimeout(searchTimePush.current)
    }

    searchTimePush.current = setTimeout(() =>{
      const rulest = {
        posts: value
      }
      onSubmit(rulest)
    }, 10)

  }

  return (
    <>
      <input type="text" value={searchPost} onChange={handleChange}/>
    </>
  );
}

export default SearchPosts;