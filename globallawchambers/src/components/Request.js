import React from 'react'
import { useState } from "react";
import Axios from "axios";


function Request() {
    const[listOfConsultations, setListOfConsultations] = useState ([]);
       
    const[name,setName] = useState("");

    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");


    const createConsultation = () =>{
        Axios.post("http://localhost:3001/createConsultation", {
            name,
            email,
            message,

        }).then((response)=>{
            setListOfConsultations([...setListOfConsultations,{
                name,email,message
            },]);
        });
    };
    
  return (
    <div>
        <div className="container my-5 py-5">
                    <div className="row">
                        
                        
                            
                           
                            <div className="col-md-8">
                            <h2 className="display-6 mb-2">Explain your problem for free</h2>
                            <hr className='w-50' />
                                <form action="">
                                    <div className="mb-3">
                                        <label for="Name" className="form-label">Your Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(event) => { setName(event.target.value);}} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(event) => { setEmail(event.target.value);}}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(event) => { setMessage(event.target.value);}}></textarea>
                                    </div>
                                    <button onClick={createConsultation} className='btn btn-outline-primary mt-5'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                
    </div>
  )
}

export default Request