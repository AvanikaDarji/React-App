
import React , {useState} from "react";
import useInputFields from "./useInputFields"
import formData from "./data";

export function Form(){
    const signup = () => {
        alert(`Full Name: ${inputs.firstName} ${inputs.middleName} ${inputs.lastName}
        Address:  ${inputs.address1} ${inputs.address2} ${inputs.city} ${inputs.state}  ${inputs.country} ${inputs.zipCode}`)
    }
    const { inputs, handleChange, handleSubmit } = useInputFields(signup);

   
let namesArray  = [];
let addressArray =[];
let names=[];
let address=[];
    if (formData){
        Object.keys(formData).map((element,index)=>{
            if(element == "Full Name"){
                namesArray.push(formData[element]);
            }
            if(element == "Home Address"){
                addressArray.push(formData[element]);
            }
          } ) 
        namesArray.forEach(function(element){
          element.forEach((function(ele){
              names.push(ele);
          }))
        })
        addressArray.forEach(function (element) {
            element.forEach((function(ele) {
                address.push(ele);
            }))
        })
}
return (
<div>

<h1> Full Name </h1>
     <form onSubmit={handleSubmit}>
    {   

                          names.map((element)=>{
                              return (<div id={element.id} className="name-inputs">
                              <label className="form-label">{element.label}</label>
                                <input type={element.type} name={element.id} aria-label={element.definition}  pattern={element.mask}  onChange={handleChange}  required  />
                          </div>)
                           } ) 
    }

<div>
            <h1> Address</h1>
            {
           
                address.map((element) => {
                    return (
                        <div id={element.id} className="address-inputs">    
                           
                            <label className="form-label">{element.label}</label>
                            {element.id == "state" && <select name={element.id} onChange={handleChange}>{element.sourceList.map((state) => <option  value={state}>{state}</option>)}</select>}
                            {element.id == "country" && <select name={element.id}  onChange={handleChange}>{element.sourceList.map((ele) => <option value={ele.name}>{ele.name}</option>)}</select>}
                            {element.id !== "country" && element.id !== "state"  && <input type={element.type} name={element.id} pattern={element.mask} onChange={handleChange} aria-label={element.definition} /> }
                           
                            
                        </div>
                    )
                })
            }

            </div>
            <button type="submit">Sign Up</button>
  
     </form>
    </div>
)

}