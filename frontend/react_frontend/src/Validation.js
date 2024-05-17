import React from 'react'

function Validation(value) {
    const errors={}
    if(value.fname==="")
        {
            errors.fname="firstname is mandatory";

        }
    if(value.fname==="")
        {
            errors.lname="lastname is mandatory";
                
        }
    if(value.email==="")
        {
            errors.email="email is mandatory"
        }
    
  return errors;
}

export default Validation
