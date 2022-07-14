
import React from 'react';
import About from './About';
import Practice from './Practice';
import Attorneys from './Attorneys';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5 ">
                            <h1 className="display-4 fw-boldermb-4 text-center">Global Law Chambers</h1>
                            <h3 className="display-8 text-center">Get an attorney who will fight for your rights</h3>
                            <Link to="/request" className="consultation rounded-pill"  >Free Consultation</Link>
                            </div>
                           

                           
                            
                                
                            
                    </div>
                </div>
            </section>
            <About/>
            <Practice/>
            <Attorneys/>
           

        </div>
    );
}

export default Home;