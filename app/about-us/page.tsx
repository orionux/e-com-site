import Layout from '@/Components'
import React from 'react'

const page = () => {
  return (
    <Layout>
        <>
        <div className="breadcrumb-area pt-205 pb-210" style={{backgroundImage: "url(assets/img/aboutBanner.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top'}}>
            <div className="container">
                <div className="breadcrumb-content text-center" style={{marginTop: '-30px', marginBottom: '30px'}}>
                    <h2>about us</h2>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li> about us </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="about-story pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="story-img">
                            <img src="assets/img/vision.svg" alt=""></img>
                            {/* <div className="about-logo">
                                <h3>ezone</h3>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="story-details pl-50">
                            <div className="story-details-top">
                                <h2>Vision<span></span></h2>
                                <p>We aspire to be a leading provider of high-quality tobacco accessories that enhance the enjoyment of tobacco products for our customers. Our vision is to create a community of individuals who appreciate the art of tobacco smoking and respect the traditions associated with it. We want to be known for our commitment to quality, innovation, and exceptional customer service.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    
                    <div className="col-lg-6">
                        <div className="story-details pl-50">
                        <h2>Mission<span></span></h2>
                        <p>Our mission is to offer a diverse range of tobacco accessories that cater to the needs of our customers. We provide a selection of pipes, cigar cutters, lighters, humidors, and other products that are made with the highest quality materials and craftsmanship. Our products are carefully selected to ensure that they meet our rigorous standards for functionality, durability, and aesthetics. We are committed to providing exceptional customer service and maintaining high-quality standards for all our products. Our team of experts is always available to help customers choose the right accessories that suit their preferences and enhance their tobacco smoking experience. We are dedicated to creating an environment that promotes responsible tobacco use and respect for all individuals. We believe that tobacco smoking is an art form that requires skill, knowledge, and patience. We aim to help our customers appreciate the nuances of tobacco smoking and develop a deeper understanding of its history and cultural significance. In summary, our mission is to help our customers enhance their tobacco smoking experiences with the right tools and accessories. We are passionate about what we do and strive to provide the highest level of quality, service, and innovation in all that we do.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="story-img">
                            <img src="assets/img/mission.svg" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    </Layout>
  )
}

export default page