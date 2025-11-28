import React from "react";
import {useRef} from "react";

export default function Demo(){
  const inputRef = useRef(null);
  const handleClick =()=> inputRef.current.focus();

  return (
    <>
    <input ref={inputRef} type="text" placeholder="Focus the button"/>
    <button onClick={handleClick}>Focus input</button>
    </>
  );
}