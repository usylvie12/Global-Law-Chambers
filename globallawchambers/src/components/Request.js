
import React from 'react';

import axios from "axios";

class Request extends React.Component {

    state = {
        name:'',
        email:'',
        message:'',
        consultations:[]
     
     };

     componentDidMount = () => {
        this.getConsultation();
      };
    
    
      getConsultation = () => {
        axios.get('/api')
          .then((response) => {
            const data = response.data;
            this.setState({ consultations: data });
            console.log('Data has been received!!');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }
     
    
    handleChange = ({ target }) => {
        const { name, value }= target;
        this.setState({ [name]: value });
        
    };    
        
submit = (event) =>{
    event.preventDefault();

    const payload = {
        name: this.state.names,
        email: this.state.email,
        message: this.state.message
    };

    axios({
        url: '/api/save',
        method: 'POST',
        data: payload
      })
        .then(() => {
          console.log('Data has been sent to the server');
          this.resetUserInputs();
          this.getConsultation();
        })
        .catch(() => {
          console.log('Internal server error');
        });;
    };
  
    resetUserInputs = () => {
      this.setState({
        names: '',
        email: '',
        message:''
      });
    };
  
    displayConsultation = (consultations) => {
  
      if (!consultations.length) return null;
  
  
      return consultations.map((consultation, index) => (
        <div key={index} className="consultation_display">


           

<hr/>
          <div className="container">
          
                
                    <div className="row justify-content-center">

                   
                            
                              
                               
                                    <div className="row padding">
                                      <div className="col-md-9">
                                      <div className="card  p-3 mb-4 bg-white rounded" >
                                      <div className="card-body">

                                      <p>{consultation.name}</p>
                                      <p>{consultation.email}</p>
                                      <p>{consultation.message}</p>
                                        
                                    </div></div></div>
                              
                            </div>

                    </div>
                </div>
                
        </div>
      ));
    

};

  render() {

    console.log('State:', this.state);
    return (
        <div>
        <div className="container my-5 py-5">
                    <div className="row">
                        
                        
                            
                           
                            <div className="col-md-8">
                            <h2 className="display-6 mb-2">Explain your problem for free</h2>
                            <hr className='w-50' />
                                <form onSubmit={this.submit}>
                                    
                                    <div className="mb-3">
                                        <label for="Name" className="form-label">Your Name</label>
                                        <input type="text" name='names' className="form-control" value={this.state.names} onChange={this.handleChange} id="exampleFormControlInput1"  />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" name='email' className="form-control" id="exampleFormControlInput1" value={this.state.email} onChange={this.handleChange} placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                        <textarea className="form-control" name='message' value={this.state.message} onChange={this.handleChange} rows="5" ></textarea>
                                    </div>
                                    <button  className='btn btn-outline-primary mt-5'>Submit</button>
                                </form>
                                <div className="consultation-">
                                  {this.displayConsultation(this.state.consultations)}
                                </div>
                            </div>
                        </div>
                    </div>
                
    </div>
  );
}
      
    
  }

export default Request
    

