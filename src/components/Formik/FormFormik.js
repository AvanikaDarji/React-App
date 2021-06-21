import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./Form.scss";




export const FormFormik = () => {

 
    const initialValues = {
        email: "",
        password: ""
    };


    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required")
        
    });
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values)=>{
                console.log(values);
            console.log( JSON.stringify(values,null,2));
            }}
        >
            {(formik) => {
                const { errors, handleChange , touched, isValid, values, dirty } = formik;
                return (
                    <div className="container">
                        <h1>Sign in to continue</h1>
                        <div> {errors.email}</div>
                        <Form>  
                            <div className="form-row">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </div>
                            <button type="submit">  Sign In   </button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};


