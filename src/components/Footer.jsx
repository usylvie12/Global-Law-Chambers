import React from 'react';

const Footer = () => {
    return (
        <div>
            <section id="footer">
            <div classNam="container padding">
      <div className="row padding">
        <div className="col-md-6">
          <h5>Contact Us</h5>
          <hr className=" mx-auto" />
          <p><i className="fa fa-map-marker"></i>  KN 20 Ave,Kigali Rwanda </p>
          <p><i className="fa fa-phone"> </i>  +250788827458/+250788716275</p>
          <p><i className="fa fa-envelope"></i> info@globalawchambers.com</p>
          
         
        
        </div>
        <div className="col-md-6">
            <h5>Open Time</h5>
            <hr className=" mx-auto" />
            <p>Opening days: Monday-Friday:8am-6pm</p>
            
           
          </div>
          </div>
          </div>

          <div className="col-12 text-center">
               <hr className="light" />
               <p> &copy; Global Law Chambers-All Right Reserved</p>
             </div>
            </section>



            
        </div>
    );
}

export default Footer;