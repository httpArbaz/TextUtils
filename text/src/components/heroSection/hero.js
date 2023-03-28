import React,{useState} from 'react'
import "./hero.css"

function Hero() {
    const [color,setColor] = useState(false)


    function HandleClicked(){
        setColor(!color)

       
    }


  return (
    <div className='box'>
    <h1 className='myWorld'>hello world</h1>
    <p>this is my first react app </p>
    <button 
    onClick={HandleClicked}  
    className='button'
    style={{
        backgroundColor:`${color === false ?"black" : "white"}`,
        color:`${color === false ?"white" : "black"}`
    }}
    
     >Click mee</button>
      
    </div>
  )
}

export default Hero
