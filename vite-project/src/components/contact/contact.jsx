const Contact = () => {
  
    return (
      <>
    <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
        <section className="contact-section" id="section_5">
            <div className="section-padding section-bg">
                <div className="container">
                <div className="row">   
                    <div className="col-lg-8 col-12 mx-auto">
                    <h2 className="text-center">Say hello</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="section-padding">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                    <h5 className="mb-3"><strong>Contact</strong> Information</h5>
                    <p className="text-white d-flex mb-1">
                        <a href="tel: 120-240-3600" className="site-footer-link">
                        (+49) 
                        120-240-3600
                        </a>
                    </p>
                    <p className="text-white d-flex">
                        <a href="mailto:info@yourgmail.com" className="site-footer-link">
                        hello@barber.beauty
                        </a>
                    </p>
                    <ul className="social-icon">
                        <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-facebook">
                        </a>
                        </li>
                        <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-twitter">
                        </a>
                        </li>
                        <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-instagram">
                        </a>
                        </li>
                        <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-youtube">
                        </a>
                        </li>
                        <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-whatsapp">
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-5 col-12 contact-block-wrap mt-5 mt-lg-0 pt-4 pt-lg-0 mx-auto">
                    <div className="contact-block">
                        <h6 className="mb-0">
                        <i className="custom-icon bi-shop me-3" />
                        <strong>Open Daily</strong>
                        <span className="ms-auto">10:00 AM - 8:00 PM</span>
                        </h6>
                    </div>
                    </div>
                    <div className="col-lg-12 col-12 mx-auto mt-5 pt-5">
                    <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.597345140148!2d124.98139947348956!3d1.4175081613577265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870a95df6309dd%3A0x21d86e4847556add!2sUniversitas%20Klabat!5e0!3m2!1sen!2sid!4v1700407883997!5m2!1sen!2sid" width="100%" height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
      </>
    )
  }
  
  export default Contact