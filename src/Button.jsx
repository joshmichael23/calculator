import React, { useEffect, useState } from 'react'


const Button = ({ className, value, realValue, setRealValue}) => {

    const[pushed, setPushed] = useState(false);

    
    function set(e){
        if(e.target.value=="DEL"){
            setRealValue(realValue.toString().slice(0, -1));
        }
        else if(e.target.value=="RESET"){
            setRealValue('');
        }
        else if(e.target.value=="="){
            setRealValue(eval(realValue));
        }
        else if(e.target.value=="x"){
            setRealValue(realValue+'*');
        }
        else{
            setRealValue(realValue+e.target.value);
        }   
    }

    function classVal(e){
        if(e=="DEL")
            return "del " + className;
        else if(e=="=")
            return "equals " + className;
        else if(e=="RESET")
            return "reset " + className;
        else
            return className;
    }
    
    return (

        <button 
            className={`${classVal(value)} ${pushed ? 'push': ''}`}
            value={value}
            onClick={
                e=>{
                    set(e);
                    setPushed(true);
            }}
            onAnimationEnd={() => setPushed(false)}
        >{value}</button>


         
    )
}

export default Button