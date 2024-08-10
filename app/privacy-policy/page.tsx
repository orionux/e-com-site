import Layout from '@/Components'
import React from 'react'

const page = () => {
  return (
    <Layout>
        <>
        <div className="breadcrumb-area pt-205 pb-210" style={{backgroundImage: "url(assets/img/aboutBanner.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top'}}>
            <div className="container">
                <div className="breadcrumb-content text-center" style={{marginTop: '-30px', marginBottom: '30px'}}>
                    <h2>Privacy Policy</h2>
                    <ul>
                        <li><a href="/">home</a></li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="about-story pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="story-details pl-50">
                            <div className="story-details-top">
                                <h2>Privacy Policy<span></span></h2>
                                <p>At Ferolis, we are committed to protecting the privacy and security of our users&apos; personal information. This Privacy Policy explains how we collect, use, and safeguard the data provided by our users. By accessing or using our e-commerce platform, you consent to the practices described in this Privacy Policy.</p>
                            </div>
                            <div className="story-details-bottom">
                                <h4>Information Collection:</h4>
                                <p>Personal Information: When you create an account or place an order on Ferolis, we may collect personal information such as your name, email address, shipping address, and payment details. This information is necessary to process your orders, provide customer support, and improve your shopping experience. Usage Data: We may automatically collect certain information when you visit our website, such as your IP address, device information, browser type, and operating system. This data helps us analyze user behavior, diagnose technical issues, and enhance our platform&apos;s performance. Cookies and Tracking Technologies: Ferolis uses cookies and similar tracking technologies to enhance your browsing experience, personalize content, and analyze user trends. You have the option to disable cookies through your browser settings, but this may limit certain features of our platform.</p>
                            </div>
                            <div className="story-details-bottom">
                                <h4>Information Use:</h4>
                                <p>Order Processing: We use the personal information you provide to process and fulfill your orders, communicate order updates, and arrange for delivery. Personalization: We may use your information to personalize your shopping experience, recommend products, and provide targeted advertisements based on your preferences and browsing history. Customer Support: Your information helps us respond to your inquiries, provide technical support, and address any issues or concerns you may have. Marketing Communications: With your consent, we may send you promotional emails or newsletters about new products, special offers, or upcoming events. You can opt out of receiving these communications at any time.</p>
                            </div>
                            <div className="story-details-bottom">
                                <h4>Information Sharing:</h4>
                                <p>Third-Party Service Providers: We may share your personal information with trusted third-party service providers who assist us in operating our platform, processing payments, delivering orders, and analyzing data. These providers are bound by confidentiality agreements and are only authorized to use your information for specified purposes. Legal Compliance: We may disclose your information to comply with applicable laws, regulations, or legal processes, or to respond to valid government requests or inquiries.</p>
                            </div>
                            <div className="story-details-bottom">
                                <h4>Data Security:</h4>
                                <p>Ferolis implements reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or storage system is completely secure. We cannot guarantee the absolute security of your information.</p>
                            </div>
                            <div className="story-details-bottom">
                                <h4>Data Retention:</h4>
                                <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>
                            </div>
                            <div className="story-details-bottom">
                                <h4>Your Rights:</h4>
                                <p>You have the right to access, correct, or delete the personal information we hold about you. You may also have the right to restrict or object to certain data processing activities. To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below.</p>
                            </div>
                            <div className="story-details-bottom">
                                <h4>Changes to the Privacy Policy:</h4>
                                <p>Ferolis may update this Privacy Policy from time to time. Any changes will be posted on our platform, and the revised Privacy Policy will be effective when posted.</p>
                            </div>
                            <div className="story-details-bottom">
                                <h4>Contact Us:</h4>
                                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please contact us at [contact information].</p>
                            </div>
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