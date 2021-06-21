
import React, { useState, useEffect } from "react";
import "./Form.scss";

export function FormUsingValidation() {
  const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState({});
  const [formError, setFormError] = useState({});
  const [submit, setIsSubmit] = useState(false);

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }
const submitting =()=>{
  console.log(formValues);
}
const handleSubmit =(e)=>{
e.preventDefault();
setFormError(validate(formValues));
setIsSubmit(true);
}
  useEffect(()=>{
    if (Object.keys(formError).length == 0 && submit){
      submitting();

    }
  }, [formError]);


  const validate =(values)=>{
    let errors ={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email){
      errors.email = "can not be blank!";
    }else if(!regex.test(values.email)){
    errors.email ="add@ in email";
    }
    if(!values.password){
      errors.password ="Cannot be blank";
    }else if((values.password).length < 4){
      errors.password ="Password must be more than 4 characters";
    }
return errors;
  }



  return (
    <div className="container">
      <h1> Sign In to continue</h1>
      {Object.keys(formError).length === 0 && submit && (
        <span className="success-msg">Signed in successfully</span>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"   onChange={handleChange} />
          {formError.email && (<span>{formError.email}</span>)}
        </div>
        <div className="form-row">
          <label htmlFor="password">password</label>
          <input type="password" name="password"  onChange={handleChange} id="password" />
          {formError.password && (<span> {formError.password}</span>)}
        </div>
        <button  type="submit">
          Submit
        </button>
      </form>
     
      <p>{submit && !formError.email && formValues.email}</p>
      <p>{submit && !formError.password && formValues.password}</p>
    </div>
  );
}
