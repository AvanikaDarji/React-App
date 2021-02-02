import React, { useState } from "react";

export default  function useInputFields(callback){
    const [inputs, setInputFields] = useState({});

    function handleChange(event){
        event.persist();
        setInputFields(inputs =>({...inputs, [event.target.name]: event.target.value}))
    }
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    }
   

    return { inputs, handleChange, handleSubmit}
}
