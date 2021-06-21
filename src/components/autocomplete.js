import React , {useState,useEffect} from "react";
const stuff = require('./statesAndCountries');
const { states, countries } = stuff;

export function AutoComplete(){
    const randomNumber = () =>
        Math.floor((1 + Math.random()) * 0x100000)
            .toString(16)
            .substring(0);
    const [values, setSelected] = useState({});
    const [submit, setSubmit] = useState(false);
    const [randomId, setRandomId] = useState(randomNumber());
    const [valid,setValid]  = useState(false);

//const randomNumber =()=>Math.floor(Math.random()* 100).toString(16).substring(0);
      //setRandomId((randomId) => randomNumber());
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(values !== ""){
            setValid(true);
        }
        setSubmit(true);

    }

const handleChange =(event)=>{
    //setSelected((selectedValue) =>({...selectedValue,[event.target.name]:event.target.value}))
    setSelected({ ...values, [event.target.name]: event.target.value })
}

return (<div className="form-container">
<form onSubmit={e=>handleSubmit(e)}>

 {submit  && valid ? <div className="success">Thank you for submitting data</div>: null}
<label htmlFor="country"> what is your favorite Country?</label>
        <input  type="text"  name="country" list={"data-list-" + randomId} onChange={handleChange} />
        <datalist id={"data-list-" + randomId} >
 {
                countries.map((element, index) => <option key={index} value={element.name} >{element.name}</option>)
    }
</datalist>
{submit && !values.country ? <span> Please select country</span> : null}


<label htmlFor="firstName"> First Name</label>
<input type="text" name="firstName"  onChange={handleChange}/>
{submit && !values.firstName ? <span> Please enter a first name</span> : null}


        <button className="btn-secondary" type="submit"> Submit</button>
        {submit && valid ? <div><p> firstName is  {values.firstName} </p> <p> selected country is {values.country} </p></div> : null}
</form>
    
</div>);
}