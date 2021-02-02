
import React , {Component} from "react";
import {Form} from "./form"
import { FormData } from "./data";
export default  class App extends Component{

/*constructor(props){
  super(props);
  this.state = FormData ;
}*/

    render(){
      return(
          <div>
                   <Form />
          </div>
      )
    }
}