import React from 'react';

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
                <div class="container padding">
       <div class="row padding">
         <div class="col-md-3">
      <div class="card shadow p-3 mb-5 bg-white rounded" >
      
      <img src="/assets/claude.png" className="card-img-top" alt="..."/>
      <div class="card-body">
        <h4 class="card-title">Jean Claude Rwibasira</h4>
        <h5 class="card-subtitle">Manager Partner</h5>
        <br/>
        <a href="attorney.html" class="rounded-pill text-capitalize">view profile</a>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow p-3 mb-5 bg-white rounded" >
      <img src="/assets/provy.png" className="card-img-top" alt="..."/>
      <div class="card-body">
        <h4 class="card-title">Providence Ingabire</h4>
        <h5 class="card-subtitle">Partner</h5>
        <br/>
        <a href="attorney.html" class="rounded-pill text-capitalize">view profile</a>
      </div>
    </div>
  </div>
    
    <div class="col-md-3">
    <div class="card shadow p-3 mb-5 bg-white rounded" >
      <img src="/assets/vivi.png" className="card-img-top" alt="..."/>
      <div class="card-body">
        <h4 class="card-title">Jean Vianney Mwumvira</h4>
        <h5 class="card-subtitle">Collaborator</h5>
       <br/>
        <a href="attorney.html" class="rounded-pill text-capitalize">view profile</a>
      </div>
    </div>
  </div>
  <div class="col-md-3">
      <div class="card shadow p-3 mb-5 bg-white rounded" >
        <img src="/assets/maya.png" className="card-img-top" alt="..."/>
        <div class="card-body">
          <h4 class="card-title">Maja <br/> Pecanac</h4>
          <h5 class="card-subtitle">Collaborator</h5>
         <br/>
          <a href="attorney.html" class="rounded-pill text-capitalize">view profile</a>
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