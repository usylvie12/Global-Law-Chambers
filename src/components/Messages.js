import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";


function Messages() {
    const[listOfConsultations, setListOfConsultations] = useState ([]);
    

    
    useEffect(() => {
        Axios.get('https://global-law-chambers.herokuapp.com/getConsultations').then((response) => {
            setListOfConsultations(response.data);
        });
    }, []);
 
    return (
        <div>
            <section id="message">
            <div className="container">
                    <div className="row justify-content-center">

                    <h2 className="display-6 mb-2">Clients Messages</h2>
                            <hr />
                            <div className="consultationDisplay">
                               {listOfConsultations.map((consultation)=>{
                                return(
                                    <div className="row padding">
                                      <div className="col-md-4">
                                      <div className="card  p-3 mb-4 bg-white rounded" >
                                      <div className="card-body">
                                        <p>Name: {consultation.name} <br/>

                                        Email: {consultation.email}<br/>
                                        Message: {consultation.message}</p>
                                    </div></div></div></div>
                                )
                               })}
                            </div>

                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Messages