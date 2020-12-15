import ColorBox from './components/useState/colorBox/ColorBox';
import Todolist from './components/useState/todo/Todolist';
import React, { useEffect, useState } from 'react';
import Posts from './components/useEffect/index'
import Pagination from './components/useEffect/Pagination';
import queryString from 'query-string'
import InputSearch from './components/useEffect/Input'
import Clock from './components/useEffect/Clock/index';


//http://js-post-api.herokuapp.com/api/posts?_limit=10&_pages=1
const App = () => {
  const [postList, setPostList] = useState([])
  const [paginations, setPagition] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1,
  })

  const [filters, setFilters] =useState({
    _limit: 10,
    _page: 1
  })

  useEffect(()=>{
    try {
      async function fetchPostList () {
        const filterString = queryString.stringify(filters)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${filterString}`
        const reponse = await fetch(requestUrl)
        const reponseJON = await reponse.json()
        const { data, pagination } = reponseJON
        console.log(reponseJON)
        setPostList(data)
        setPagition(pagination)
      }
      fetchPostList()

    } catch (error) {
      console.log('co loi:', error.message)
    }
  }, [filters])

  const onChangPage = page => {
    setFilters({
      ...filters,
      _page: page
    })
  }

  const onHandleChange = rulest => {
    console.log(rulest)
    setFilters({
      ...filters,
      _page: 1,
      title_like: rulest.posts
    })
  }

  const [showClock, setShowClock] = useState(true)

  return (
    <>
      {/* <ColorBox /> */}
      {/* <Todolist /> */}
      <h1>React Hooks</h1>
      {/* <InputSearch onSubmit={onHandleChange}/>
      <Posts posts={postList}/>
      <Pagination
        paginations={paginations}
        onChangPage={onChangPage}
      /> */}
      { showClock && <Clock />}

      <button onClick={() => setShowClock(!showClock)}>Clear</button>
    </>
  );
}

export default App;
