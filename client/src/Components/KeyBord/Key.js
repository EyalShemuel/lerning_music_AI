import React from 'react'
/* 
style={{ background: "#eee", background: "linear-gradient(45deg, #ddc, #ddd)",boxshadow: "0 4px 3px -3px black ", boxshadow: "inset 2px 0px 3px -1px rgba(0,0,0,0.61)"}
*/
const key = ({thekey}) => {
const click_handler = () => {
    console.log('click_handler')
}

const keyhandler_for_space = () =>{
    console.log('keyhandler_for_space')  
}

    return (
        <>
        <li  className={thekey.type==='up' ? "b":''} >
            {/* <div id = {thekey.note}> {thekey.key}</div> */}
            <div  id = {thekey.note} role="button" onClick={click_handler()} >{thekey.key}</div>
          </li>    
          
        </>
    )
}

export default key
