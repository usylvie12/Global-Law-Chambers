import React from 'react';
import { Link } from 'react-router-dom';

const Attorneys = () => {
    return (
        <div>

           <section id="attorneys">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-6 text-center mb-4">
                        Our Attorneys
                        </h2>
                        <hr className="w-25 mx-auto" />
                    </div>
                </div>
                <div className="container padding">
       <div className="row padding">
         <div className="col-md-3">
      <div className="card shadow p-3 mb-5 bg-white rounded" >
      
      <img src="/assets/claude.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Jean Claude Rwibasira</h4>
        <h5 className="card-subtitle">Manager Partner</h5>
        <br/>
        <Link to="/detail" className="rounded-pill text-capitalize">view profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card shadow p-3 mb-5 bg-white rounded" >
      <img src="/assets/provy.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Providence Ingabire</h4>
        <h5 className="card-subtitle">Partner</h5>
        <br/>
        <Link to="/detail" className="rounded-pill text-capitalize">view profile</Link>
      </div>
    </div>
  </div>
    
    <div className="col-md-3">
    <div className="card shadow p-3 mb-5 bg-white rounded" >
      <img src="/assets/vivi.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Jean Vianney Mwumvira</h4>
        <h5 className="card-subtitle">Collaborator</h5>
       <br/>
        <Link to="/detail" className="rounded-pill text-capitalize">view profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-3">
      <div className="card shadow p-3 mb-5 bg-white rounded" >
        <img src="/assets/maya.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-title">Maja <br/> Pecanac</h4>
          <h5 className="card-subtitle">Collaborator</h5>
         <br/>
          <Link to="/detail" className="rounded-pill text-capitalize">view profile</Link>
        </div>
      </div>
    </div>
    </div>
    </div>
                
                                                </div>
           </section>
            
        </div>
    );
}

export default Attorneys;