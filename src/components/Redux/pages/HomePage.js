import React from 'react'
import {v4 as uuid} from 'uuid'
import {useDispatch, useSelector} from 'react-redux'
import {AddNewHobby, SetActiveHobby} from '../actions/Hobby'
import HobbyList from '../components/Home/HobbyList/index'
const HomePage = () => {
    const dispatch = useDispatch()
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)

    const handleAddHobby = () => {
        const hobby = {
            id: uuid(),
            title: 'asd'
        }
        const newHobby = AddNewHobby(hobby)
        dispatch(newHobby)
    }

    const handleClickHobby = id => {
        const action = SetActiveHobby(id)
        console.log(id)
        dispatch(action)
    }

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={handleAddHobby}>Add</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                handleClickHobby={handleClickHobby}
            />
        </>
    )
}

export default HomePage