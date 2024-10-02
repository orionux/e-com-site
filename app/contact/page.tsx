import Layout from "@/Components";
import React from "react";

const page = () => {
  return (
    <Layout>
      <>
        <div
          className="breadcrumb-area"
          style={{
            backgroundImage: "url(assets/img/contact.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "end",
          }}
        >
          <div className="container">
            <div
              className="breadcrumb-content text-center"
              style={{ marginTop: "-30px", marginBottom: "30px" }}
            >
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <a href="/">home</a>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 pe-lg-5">
                <div className="contact-map-wrapper">
                  {/* <div className="contact-map mb-40">
                                <iframe className="map-size"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd">
                                </iframe>
                            </div> */}
                  <div className="contact-message">
                    <div className="contact-title">
                      <h4>Feel free to Say</h4>
                    </div>
                    <form
                      id="contact-form"
                      className="contact-form"
                      action="assets/mail.php"
                      method="post"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="contact-input-style mb-30">
                            <label>Name*</label>
                            <input name="name" required type="text"></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-input-style mb-30">
                            <label>Email*</label>
                            <input name="email" required type="email"></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-input-style mb-30">
                            <label>Telephone</label>
                            <input
                              name="telephone"
                              required
                              type="text"
                            ></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-input-style mb-30">
                            <label>subject</label>
                            <input name="subject" required type="text"></input>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="contact-textarea-style mb-30">
                            <label>Comment*</label>
                            <textarea
                              className="form-control2"
                              name="message"
                              required
                            ></textarea>
                          </div>
                          <button
                            className="submit contact-btn btn-hover"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                    <p className="form-messege"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-info-wrapper">
                  <div className="contact-title">
                    <h4>Location & Details</h4>
                  </div>
                  <div className="contact-info">
                    <div className="single-contact-info">
                      <div className="contact-info-icon">
                        <i className="ti-location-pin"></i>
                      </div>
                      <div className="contact-info-text">
                        <p>
                          <span>Address: Netherlands</span> Televisieweg 41<br></br>
                          1322 AJ, Almere<br></br>
                          The Netherlands
                        </p>
                      </div>
                    </div>
                    <div className="single-contact-info">
                      <div className="contact-info-icon">
                        <i className="pe-7s-mail"></i>
                      </div>
                      <div className="contact-info-text">
                        <p>
                          <span>Email: </span> info@ferolis.com
                        </p>
                      </div>
                    </div>
                    <div className="single-contact-info">
                      <div className="contact-info-icon">
                        <i className="pe-7s-call"></i>
                      </div>
                      <div className="contact-info-text">
                        <p>
                          <span>Phone: </span> +31615095711
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default page;
