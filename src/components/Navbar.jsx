import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow">
      <img src="/assets/logo.jpg" className="navbar-logo" alt="..."/>
      
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Practice Areas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Attorneys</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
      <button className="btn btn-outline-primary ms-auto px-4 rounded-pill">Login</button>
      <button className="btn btn-outline-primary ms-2  rounded-pill">Register</button>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;