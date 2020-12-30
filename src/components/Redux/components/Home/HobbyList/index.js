import React from 'react'

const HobbyList = props => {
    const {hobbyList, activeId, handleClickHobby} = props

    const handleClick = id => {
        if (handleClickHobby) {
            handleClickHobby(id)
        }
    }

    return (
        <>
            <ul>
                {
                    hobbyList && hobbyList.map(hobby => {
                        return (
                            <li
                                key={hobby.id}
                                className={hobby.id === activeId ? 'active' : ''}
                                onClick={() => handleClick(hobby.id)}
                            >
                                {hobby.id}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    handleClickHobby: null
}

export default HobbyList
