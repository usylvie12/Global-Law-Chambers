import React from 'react'

function Login() {
  return (
    <div>
        <section id="login">
                <div className="container my-5 py-5">
                    
                    
                    
                    

                    <form className='col-7 shadow '>
                    <h3 className="justify-content-center">Enter your Email and Password</h3>
                    <hr className='w-50' />
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className=" rounded-pill">Submit</button>
                    </form>
                    
                </div>
            </section>
    </div>
  )
}

export default Login