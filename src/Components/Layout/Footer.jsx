import { Link } from "react-router-dom"
export default function Footer() {
  return (

    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Pet Heaven</h2>
              <p>
               
                  Welcome to Pet Heaven — your trusted platform for pet adoption and care.
                </p>

              <ul className="ftco-footer-social p-0">

                <li className="ftco-animate">
                  <a
                    href="mailto:jasmeetk.saini16@gmail.com"
                    target="_blank"
                   
                    title="Email"
                  >
                    <span className="fa fa-envelope" />
                  </a>
                </li>

                <li className="ftco-animate">
                  <a href
                    ="https://github.com/Jasmeet1606"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="GitHub"
                    target="_blank"
                  >
                    <span className="bi bi-github" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href
                    ="https://www.linkedin.com/in/jasmeet-kaur-30bb56303/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Linkedin"
                    target="_blank"
                  >
                    <span className="bi bi-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Latest News</h2>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="img mr-4 rounded"
                  style={{ backgroundImage: "url(/assets/images/image_1.jpg)" }}
                />
                <div className="text">
                  <h3 className="heading">
                    <Link to="https://youtu.be/Zb3Wzs2FcFE" target="_blank">
                       Basic Pet Care: Dogs(some important things)
                    </Link>
                  </h3>
                  <div className="meta">
                    <div>
                      <Link to="/">
                        <span className="icon-calendar" /> April 7, 2020
                      </Link>
                    </div>
                    <div>
                      <Link to="/">
                        <span className="icon-person" /> Admin
                      </Link>
                    </div>
                    <div>
                      <Link to="/">
                        <span className="icon-chat" /> 19
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="img mr-4 rounded"
                  style={{ backgroundImage: "url(/assets/images/image_2.jpg)" }}
                />
                <div className="text">
                  <h3 className="heading">
                    <Link to="https://youtu.be/JPI3qjmtHHg" target="_blank">
                      Cutest Baby Animals,Adorable Puppy & Kitten Videos
                    </Link>
                  </h3>
                  <div className="meta">
                    <div>
                      <Link to="/">
                        <span className="icon-calendar" /> April 7, 2020
                      </Link>
                    </div>
                    <div>
                      <Link to="/">
                        <span className="icon-person" /> Admin
                      </Link>
                    </div>
                    <div>
                      <Link to="/">
                        <span className="icon-chat" /> 19
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}

            <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="py-2 d-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" className="py-2 d-block"> About </Link>
                </li>
                <li>
                  <Link to="services" className="py-2 d-block"> Services</Link>
                </li>
               <li>
               <Link to="gallery" className="py-2 d-block"> Gallery</Link> 
            </li> 
                <li>
                  <Link to="blog" className="py-2 d-block"> Blog</Link>
                </li>
                <li>
                  <Link to="contact" className="py-2 d-block">Contact</Link>
                </li>
              </ul>
            </div>



            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map" />
                    <span className="text">Plot No. 15, Model Town, Ludhiana, Punjab, India</span>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="icon fa fa-phone" />
                      <span className="text">+91 98765 43210</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="icon fa fa-paper-plane" />
                      <span className="text">info@yourdomain.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <p className="copyright">
                Copyright © All rights reserved | Created with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <a href="mailto:jasmeetk.saini16@gmail.com" target="_blank">
                  Jasmeet Kaur
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}