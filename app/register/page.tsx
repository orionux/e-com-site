"use client";

import Layout from "@/Components";
import React, { useState } from "react";
import { apiUrl } from "../api/apiServices";
import Toast from "@/Components/Toast";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    customer_name: "",
    customer_type: "retail",
    phone: "",
    address: "",
    company_name: "",
    vat_no: "",
    kvk_no: "",
    country: "US",
    tax_id: "",
    payment_terms: "",
    grade: "",
    discount: "",
    loyalty_info: "",
    notes: "",
  });

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setError(null);
    setSuccessMessage(null);

    if (formData.password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      formDataToSend.append(
        key as keyof typeof formData,
        formData[key as keyof typeof formData]
      );
    });

    formDataToSend.append("confirm_password", confirmPassword);

    try {
      const response = await fetch(`${apiUrl}/register`, {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("logged_email", data.user.email);
        // localStorage.setItem("otp", data.user.otp);
        // setSuccessMessage('Registration successful! email sent to your email. verify your account and please login..! ');
        setToastMessage(
          "Registration successful! email sent to your email. verify your account and please login..!"
        );
        setToastType("success");
        window.location.href = "/otp-verification";
        console.log("Success:", data);
      } else {
        if (data.errors && data.errors.email) {
          // Display the specific email error message
          // setError(`Registration failed: ${data.errors.email[0]}`);
          //   setError(`Registration failed: ${data.errors.email[0]}`);
          setToastMessage(`Registration failed: ${data.errors.email[0]}`);
          setToastType("error");
        } else {
          setToastMessage(`Registration failed!`);
          setToastType("error");
        }
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      setToastMessage(`Registration failed!`);
      setToastType("error");
      //   setError(`Registration failed: ${error}`);
      console.error("Error:", error);
    }
  };

  return (
    // <Layout>
    <div>
      <div className="register-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-12 col-xl-6 ms-auto me-auto">
              <div className="login">
                <div className="login-form-container">
                  <div className="login-form">
                    <form onSubmit={handleSubmit}>
                      <h2 className="text-center">
                        <span>Register</span>
                      </h2>
                      {/* name */}
                      <label htmlFor="Name" style={{ color: "black" }}>
                        Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="customer_name"
                        value={formData.customer_name}
                        onChange={handleChange}
                        placeholder="Customer Name"
                        required
                        style={{
                          border: "solid 2px",
                          borderColor: "#D3D3D3",
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      ></input>
                      {/* contact number */}
                      <label htmlFor="Name" style={{ color: "black" }}>
                        Contact Number<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        style={{
                          border: "solid 2px",
                          borderColor: "#D3D3D3",
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      ></input>
                      {/* email */}
                      <label htmlFor="Name" style={{ color: "black" }}>
                        Email<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        style={{
                          border: "solid 2px",
                          borderColor: "#D3D3D3",
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      ></input>
                      {/* address */}
                      <label htmlFor="Name" style={{ color: "black" }}>
                        Address<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        required
                        style={{
                          border: "solid 2px",
                          borderColor: "#D3D3D3",
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      ></input>
                      {/* company name */}
                      <label htmlFor="Name" style={{ color: "black" }}>
                        Company Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder="Company Name"
                        required
                        style={{
                          border: "solid 2px",
                          borderColor: "#D3D3D3",
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      ></input>
                      {/* VAT Number */}
                      <label htmlFor="Name" style={{ color: "black" }}>
                        VAT Number<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="vat_no"
                        value={formData.vat_no}
                        onChange={handleChange}
                        placeholder="VAT No"
                        required
                        style={{
                          border: "solid 2px",
                          borderColor: "#D3D3D3",
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      ></input>
                      {/* KVK number */}
                      <label htmlFor="Name" style={{ color: "black" }}>
                        KVK Number<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="kvk_no"
                        value={formData.kvk_no}
                        onChange={handleChange}
                        placeholder="KVK No"
                        required
                        style={{
                          border: "solid 2px",
                          borderColor: "#D3D3D3",
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      ></input>
                      {/* country */}
                      <label htmlFor="country" style={{ color: "black" }}>
                        Country<span style={{ color: "red" }}>*</span>
                      </label>
                      <select
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="select-country">Select Country</option>
                        <option value="afghanistan">Afghanistan</option>
                        <option value="albania">Albania</option>
                        <option value="algeria">Algeria</option>
                        <option value="andorra">Andorra</option>
                        <option value="angola">Angola</option>
                        <option value="argentina">Argentina</option>
                        <option value="armenia">Armenia</option>
                        <option value="australia">Australia</option>
                        <option value="austria">Austria</option>
                        <option value="azerbaijan">Azerbaijan</option>
                        <option value="bahamas">Bahamas</option>
                        <option value="bahrain">Bahrain</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="barbados">Barbados</option>
                        <option value="belarus">Belarus</option>
                        <option value="belgium">Belgium</option>
                        <option value="belize">Belize</option>
                        <option value="benin">Benin</option>
                        <option value="bhutan">Bhutan</option>
                        <option value="bolivia">Bolivia</option>
                        <option value="bosnia-and-herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="botswana">Botswana</option>
                        <option value="brazil">Brazil</option>
                        <option value="brunei">Brunei</option>
                        <option value="bulgaria">Bulgaria</option>
                        <option value="burkina-faso">Burkina Faso</option>
                        <option value="burundi">Burundi</option>
                        <option value="cambodia">Cambodia</option>
                        <option value="cameroon">Cameroon</option>
                        <option value="canada">Canada</option>
                        <option value="cape-verde">Cape Verde</option>
                        <option value="central-african-republic">
                          Central African Republic
                        </option>
                        <option value="chad">Chad</option>
                        <option value="chile">Chile</option>
                        <option value="china">China</option>
                        <option value="colombia">Colombia</option>
                        <option value="comoros">Comoros</option>
                        <option value="congo">Congo</option>
                        <option value="costa-rica">Costa Rica</option>
                        <option value="croatia">Croatia</option>
                        <option value="cuba">Cuba</option>
                        <option value="cyprus">Cyprus</option>
                        <option value="czech-republic">Czech Republic</option>
                        <option value="denmark">Denmark</option>
                        <option value="djibouti">Djibouti</option>
                        <option value="dominica">Dominica</option>
                        <option value="dominican-republic">
                          Dominican Republic
                        </option>
                        <option value="ecuador">Ecuador</option>
                        <option value="egypt">Egypt</option>
                        <option value="el-salvador">El Salvador</option>
                        <option value="equatorial-guinea">
                          Equatorial Guinea
                        </option>
                        <option value="eritrea">Eritrea</option>
                        <option value="estonia">Estonia</option>
                        <option value="eswatini">Eswatini</option>
                        <option value="ethiopia">Ethiopia</option>
                        <option value="fiji">Fiji</option>
                        <option value="finland">Finland</option>
                        <option value="france">France</option>
                        <option value="gabon">Gabon</option>
                        <option value="gambia">Gambia</option>
                        <option value="georgia">Georgia</option>
                        <option value="germany">Germany</option>
                        <option value="ghana">Ghana</option>
                        <option value="greece">Greece</option>
                        <option value="grenada">Grenada</option>
                        <option value="guatemala">Guatemala</option>
                        <option value="guinea">Guinea</option>
                        <option value="guinea-bissau">Guinea-Bissau</option>
                        <option value="guyana">Guyana</option>
                        <option value="haiti">Haiti</option>
                        <option value="honduras">Honduras</option>
                        <option value="hungary">Hungary</option>
                        <option value="iceland">Iceland</option>
                        <option value="india">India</option>
                        <option value="indonesia">Indonesia</option>
                        <option value="iran">Iran</option>
                        <option value="iraq">Iraq</option>
                        <option value="ireland">Ireland</option>
                        <option value="israel">Israel</option>
                        <option value="italy">Italy</option>
                        <option value="ivory-coast">Ivory Coast</option>
                        <option value="jamaica">Jamaica</option>
                        <option value="japan">Japan</option>
                        <option value="jordan">Jordan</option>
                        <option value="kazakhstan">Kazakhstan</option>
                        <option value="kenya">Kenya</option>
                        <option value="kiribati">Kiribati</option>
                        <option value="kuwait">Kuwait</option>
                        <option value="kyrgyzstan">Kyrgyzstan</option>
                        <option value="laos">Laos</option>
                        <option value="latvia">Latvia</option>
                        <option value="lebanon">Lebanon</option>
                        <option value="lesotho">Lesotho</option>
                        <option value="liberia">Liberia</option>
                        <option value="libya">Libya</option>
                        <option value="liechtenstein">Liechtenstein</option>
                        <option value="lithuania">Lithuania</option>
                        <option value="luxembourg">Luxembourg</option>
                        <option value="madagascar">Madagascar</option>
                        <option value="malawi">Malawi</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="maldives">Maldives</option>
                        <option value="mali">Mali</option>
                        <option value="malta">Malta</option>
                        <option value="marshall-islands">
                          Marshall Islands
                        </option>
                        <option value="mauritania">Mauritania</option>
                        <option value="mauritius">Mauritius</option>
                        <option value="mexico">Mexico</option>
                        <option value="micronesia">Micronesia</option>
                        <option value="moldova">Moldova</option>
                        <option value="monaco">Monaco</option>
                        <option value="mongolia">Mongolia</option>
                        <option value="montenegro">Montenegro</option>
                        <option value="morocco">Morocco</option>
                        <option value="mozambique">Mozambique</option>
                        <option value="myanmar">Myanmar</option>
                        <option value="namibia">Namibia</option>
                        <option value="nauru">Nauru</option>
                        <option value="nepal">Nepal</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="new-zealand">New Zealand</option>
                        <option value="nicaragua">Nicaragua</option>
                        <option value="niger">Niger</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="north-korea">North Korea</option>
                        <option value="north-macedonia">North Macedonia</option>
                        <option value="norway">Norway</option>
                        <option value="oman">Oman</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="palau">Palau</option>
                        <option value="panama">Panama</option>
                        <option value="papua-new-guinea">
                          Papua New Guinea
                        </option>
                        <option value="paraguay">Paraguay</option>
                        <option value="peru">Peru</option>
                        <option value="philippines">Philippines</option>
                        <option value="poland">Poland</option>
                        <option value="portugal">Portugal</option>
                        <option value="qatar">Qatar</option>
                        <option value="romania">Romania</option>
                        <option value="russia">Russia</option>
                        <option value="rwanda">Rwanda</option>
                        <option value="saint-kitts-and-nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="saint-lucia">Saint Lucia</option>
                        <option value="saint-vincent-and-the-grenadines">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="samoa">Samoa</option>
                        <option value="san-marino">San Marino</option>
                        <option value="sao-tome-and-principe">
                          Sao Tome and Principe
                        </option>
                        <option value="saudi-arabia">Saudi Arabia</option>
                        <option value="senegal">Senegal</option>
                        <option value="serbia">Serbia</option>
                        <option value="seychelles">Seychelles</option>
                        <option value="sierra-leone">Sierra Leone</option>
                        <option value="singapore">Singapore</option>
                        <option value="slovakia">Slovakia</option>
                        <option value="slovenia">Slovenia</option>
                        <option value="solomon-islands">Solomon Islands</option>
                        <option value="somalia">Somalia</option>
                        <option value="south-africa">South Africa</option>
                        <option value="south-korea">South Korea</option>
                        <option value="south-sudan">South Sudan</option>
                        <option value="spain">Spain</option>
                        <option value="sri-lanka">Sri Lanka</option>
                        <option value="sudan">Sudan</option>
                        <option value="suriname">Suriname</option>
                        <option value="sweden">Sweden</option>
                        <option value="switzerland">Switzerland</option>
                        <option value="syria">Syria</option>
                        <option value="taiwan">Taiwan</option>
                        <option value="tajikistan">Tajikistan</option>
                        <option value="tanzania">Tanzania</option>
                        <option value="thailand">Thailand</option>
                        <option value="togo">Togo</option>
                        <option value="tonga">Tonga</option>
                        <option value="trinidad-and-tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="tunisia">Tunisia</option>
                        <option value="turkey">Turkey</option>
                        <option value="turkmenistan">Turkmenistan</option>
                        <option value="tuvalu">Tuvalu</option>
                        <option value="uganda">Uganda</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="united-arab-emirates">
                          United Arab Emirates
                        </option>
                        <option value="united-kingdom">United Kingdom</option>
                        <option value="united-states">United States</option>
                        <option value="uruguay">Uruguay</option>
                        <option value="uzbekistan">Uzbekistan</option>
                        <option value="vanuatu">Vanuatu</option>
                        <option value="vatican-city">Vatican City</option>
                        <option value="venezuela">Venezuela</option>
                        <option value="vietnam">Vietnam</option>
                        <option value="yemen">Yemen</option>
                        <option value="zambia">Zambia</option>
                        <option value="zimbabwe">Zimbabwe</option>
                      </select>
                      {/* password */}
                      <label
                        htmlFor="Name"
                        style={{ marginTop: "20px", color: "black" }}
                      >
                        Password<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        style={{
                          border: "solid 2px",
                          borderColor: "#D3D3D3",
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      ></input>
                      <label htmlFor="Name" style={{ color: "black" }}>
                        Confirm Password<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="password"
                        name="confirm_password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Confirm Password"
                        required
                        style={{
                          border: "solid 2px",
                          borderColor: "#D3D3D3",
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      ></input>

                      <label
                        htmlFor="terms-conditions"
                        style={{ color: "black" }}
                      >
                        <input
                          type="checkbox"
                          id="terms-conditions"
                          name="terms-conditions"
                        />
                        &nbsp;I’ve read and agreed to the{" "}
                        <a href="/terms-and-conditions" target="_blank">
                          terms & conditions
                        </a>
                        .
                      </label>
                      {error && (
                        <div
                          className="alert alert-info alert-dismissible fade show"
                          role="alert"
                        >
                          {error}
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                      )}
                      {successMessage && (
                        <p style={{ color: "green" }}>{successMessage}</p>
                      )}
                      <div className="button-box">
                        <button
                          type="submit"
                          className="default-btn floatright"
                          style={{ backgroundColor: "#606B6E", color: "#fff" }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
    // </Layout>
  );
};

export default Register;
