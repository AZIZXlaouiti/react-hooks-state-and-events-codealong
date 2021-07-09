import React, { useState } from "react";


function Toggle() {
  function handleclick (){
  
    setClick(!click)
  }
  const [click,setClick] = useState(false)
  const color = click?"red":"white"
  
  return <button style={{background:color}}onClick={handleclick}>{click?'on':'off'}</button>;
}

export default Toggle;
