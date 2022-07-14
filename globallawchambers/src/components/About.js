import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/glc.jpg" alt="About" className='w-75 mt-5 ' />
                        </div> 
                        <div className="col-md-6">
                            <h2 className="display-6 mb-2">Who We Are</h2>
                            <hr className='w-50' />
                            <p className="lead mb-4">
                            Global Law Chambers Ltd is a well-established, medium-size business law firm. 
                            We offer a full range of corporate and commercial legal services, including but not limited 
                            to dispute resolution, litigation, employment, finance, company restructuring and tax. We also
                            work with non-profit organizations who may need legal services, especially in human rights related cases
                            <br />
                            <Link to="/detail" className="rounded-pill text-capitalize">Read more</Link> <br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;