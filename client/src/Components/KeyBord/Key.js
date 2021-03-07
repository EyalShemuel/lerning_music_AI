import React from 'react'

const key = ({thekey}) => {
    return (
        <>
        <li id = 'c1' className={thekey.type==='up' ? "b":''}>
            <div>c</div>
          </li>    
          {console.log(thekey)}
        </>
    )
}

export default key
