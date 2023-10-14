import React, { useState } from 'react';

function ColorPicker(){
    
    const [color, setColor] = useState("green");

    return(
        <div style={{backgroundColor:"skyblue", padding:"30px", margin:"50px" }}>
            <h1 style={{fontFamily:"Arial", fontSize:"35px"}}> Color Picker</h1>
            <div style={{backgroundColor:"pink", borderRadius:"10px", padding:"70px"}}>
                <div style={{backgroundColor:"color"}}>
                    <button onClick={()=>setColor("blue")}></button>
                
                    <button onClick={()=>setColor("red")}></button>
                
                    <button onClick={()=>setColor("green")}></button>
                
                    <button onClick={()=>setColor("orange")}></button>
                </div>
                <button>Pick a color</button>
            </div>
        </div>        
    );
}
    

export default ColorPicker;
