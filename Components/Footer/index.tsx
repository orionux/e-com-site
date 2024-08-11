import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer-top-area pt-70 pb-35 wrapper-padding-5">
                <div className="container-fluid">
                    <div className="widget-wrapper">
                        <div className="footer-widget mb-30">
                            <a href="#"><img src="/assets/img/svg/ferolislogo.svg" width="200" height="50" alt="" /></a>
                            <div className="footer-about-2">
                                <p>There are many variations of passages of Lorem Ipsum <br/>the majority have suffered alteration in some form, by <br/> injected humour</p>
                            </div>
                        </div>
                        <div className="footer-widget mb-30">
                            <h3 className="footer-widget-title-5">Contact Info</h3>
                            <div className="footer-info-wrapper-3">
                                <div className="footer-address-furniture">
                                    <div className="footer-info-icon3">
                                        <span>Address: </span>
                                    </div>
                                    <div className="footer-info-content3">
                                        <p> Televisieweg 41<br/>
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
                        <div className="footer-widget mb-30">
                            <h3 className="footer-widget-title-5">Newsletter</h3>
                            <div className="footer-newsletter-2">
                                <p>Send us your mail or next updates</p>
                                <div id="mc_embed_signup" className="subscribe-form-5">
                                    <form action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate >
                                        <div id="mc_embed_signup_scroll" className="mc-form">
                                            <input type="email" value="" name="EMAIL" className="email" placeholder="Enter mail address" required />
                                            <div className="mc-news" aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabIndex={-1} value=""/></div>
                                            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                                        </div>
                                    </form>
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
                                <p>Copyright © <a href="hastech.company/">HasTech</a> 2022 . All Right Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer
