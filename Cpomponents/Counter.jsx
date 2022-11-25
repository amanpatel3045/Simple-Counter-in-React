import React from 'react'
import {useState} from 'react'
function Counter(){
const[count,setCount]=React.useState(0);


function add(){
  setCount(count+1);
}
function sub(){
  setCount(count-1);
}

return(
  <div className="parent">

   <div>Counter:{count}</div>
   <button onClick={add}>INC</button>
   <button onClick={sub}>DEC</button>


    </div>
)

}
export default Counter;
