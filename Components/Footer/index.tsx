import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer-top-area pt-70 pb-35 wrapper-padding-5">
                <div className="container-fluid">
                    <div className="widget-wrapper">
                        <div className="footer-widget mb-30 col-12 col-lg-6">
                            <a href="#"><img src="/assets/img/svg/ferolislogo.svg" width="200" height="50" alt="" /></a>
                            <div className="footer-about-2">
                                <p style={{maxWidth: '70%'}}>
                                Ferolis is a Netherlands-based company specializing in smoking accessories, offering high-quality products like rolling papers, lighters, and unique smoking tools.
                                </p>
                            </div>
                        </div>
                        <div className="footer-widget mb-30 col-12 col-lg-6">
                            <h3 className="footer-widget-title-5">Contact Info</h3>
                            <div className="footer-info-wrapper-3">
                                <div className="footer-address-furniture">
                                    <div className="footer-info-icon3">
                                        <span>Address: </span>
                                    </div>
                                    <div className="footer-info-content3">
                                        <p> Televisieweg 41
1322 AJ, Almere<br/>
The Netherlands</p>
                                    </div>
                                </div>
                                <div className="footer-address-furniture">
                                    <div className="footer-info-icon3">
                                        <span>Phone: </span>
                                    </div>
                                    <div className="footer-info-content3">
                                        <p>+31615095711</p>
                                    </div>
                                </div>
                                <div className="footer-address-furniture">
                                    <div className="footer-info-icon3">
                                        <span>E-mail: </span>
                                    </div>
                                    <div className="footer-info-content3">
                                        <p><a href="mailto:  info@ferolis.com"> info@ferolis.com</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom ptb-20 gray-bg-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="copyright-furniture">
                                <p>Copyright © 2024 <a href="/">Ferolis</a>. All Right Reserved - Developed By ORION UX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer
