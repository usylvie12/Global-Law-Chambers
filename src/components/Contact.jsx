import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="display-6 text-center mb-4">
                                Contact Us
                            </h2>
                            <h3 className="display-6 text-center mb-4">
                                Have Some Questions?
                            </h3>

                            <hr className="w-25 mx-auto" />

                            <div className="col-md-6">
                                <form action="">
                                    <div classNam="mb-3">
                                        <label for="Name" class="form-label">Your Name</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1"  />
                                    </div>
                                    <div classNam="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div classNam="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                    </div>
                                    <button className='btn btn-outline-primary mt-5'>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;