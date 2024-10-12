/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { apiUrl } from "../api/apiServices";

const SignIn = () => {
  const [formData, setFormData] = useState({ number: "" });
  const [error, setError] = useState({ number: "" });
  const [apiError, setApiError] = useState("");
  const [loginEmail, setLoginEmail] = useState<string>("");

  useEffect(() => {
    const storedEmail = localStorage.getItem('reset') || '';
    setLoginEmail(storedEmail);
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    let newError = { number: "" };

    if (!formData.number) {
      newError.number = "OTP is required";
      valid = false;
    }

    setError(newError);
    return valid;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

  if (!validateForm()) {
    return;
  }

  const formDataToSend = new FormData();

  formDataToSend.append("email", loginEmail);
  formDataToSend.append("otp", formData.number);
  formDataToSend.append("otp_type", "fp");

  // console.log('Sending data:', {
  //   email: loginEmail,
  //   otp: formData.number,
  //   otp_type: "fp"
  // });

  try {
    const response = await fetch(`${apiUrl}/validate-otp`, {
      method: "POST",
      body: formDataToSend, 
    });

    const data = await response.json();
      if (data.status === "success") {
        console.log('OTP validated successfully:', data);
        window.location.href = "/change-password";
      } else {
        setApiError("OTP is invalid");
        console.log('Invalid OTP:', data);
      }
  } catch (error) {
    console.error("Error submitting form", error);
    setApiError("An unexpected error occurred");
  }
  };

  return (
    <div>
      <div className="register-area">
        <div className="container-fluid w-100 h-100 d-flex p-0 justify-content-center">
          <div className="px-2 px-lg-5 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
            <div className="col-md-12 col-12 col-lg-6 col-xl-6 ms-auto me-auto">
              <div className="login border-0">
                <div className="login-form-container border-0">
                  <div className="login-form">
                    <form onSubmit={handleSubmit}>
                      <h2 className="text-center">
                        <span>
                          <strong>OTP Verification</strong>
                        </span>
                      </h2>
                      <p
                        style={{ fontSize: "16px" }}
                        className="mt-0 mb-1 text-center"
                      >
                        One time password(OTP) has been sent via Email to
                      </p>
                      <p
                        style={{ fontSize: "16px" }}
                        className="mt-0 mb-1 text-center"
                      >
                        <b>{loginEmail}</b>
                      </p>
                      <p
                        style={{ fontSize: "16px" }}
                        className="mt-3 text-center"
                      >
                        Enter the OTP below to verify it
                      </p>
                      <input
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="px-4"
                        style={{
                          border: error.number ? "1px solid red" : "none",
                          backgroundColor: "#E5E9EB",
                          borderRadius: "50px",
                        }}
                      />
                      {error.number && (
                        <p style={{ color: "red" }}>{error.number}</p>
                      )}

                      <div className="button-box">
                        <button
                          type="submit"
                          className="default-btn w-100 floatright"
                          style={{ backgroundColor: "#606B6E", color: "#fff" }}
                        >
                          Verify OTP
                        </button>
                      </div>

                      {apiError && (
                        <div
                          className="alert alert-danger alert-dismissible fade show mt-4"
                          role="alert"
                        >
                          {apiError}
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 col-lg-6 col-xl-6 ms-auto me-auto border-0">
              <div className="login-form-container border-0 d-flex flex-column align-items-center justify-content-center">
                <img
                  src="/assets/img/login.png"
                  className="img-fluid"
                  alt=""
                  style={{ maxWidth: "300px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
