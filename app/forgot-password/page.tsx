"use client";

import React, { useState, useEffect } from "react";
import { apiUrl } from "../api/apiServices";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState({ email: "" });
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        window.location.href = "/dashboard";
      }
    }
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    let newError = { email: "" };

    if (!formData.email) {
      newError.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email address is invalid";
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
    formDataToSend.append("email", formData.email);

    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        if (typeof window !== "undefined") {
          const customerId = data.user.id;
          const customerName = data.user.customer_details.customer_name;

          localStorage.setItem("customer_id", customerId.toString());
          localStorage.setItem("customer_name", customerName);

          const tempToken = Math.random().toString(36).substr(2);
          localStorage.setItem("authToken", tempToken);

          setApiError("");
          window.location.href = "/dashboard";
        }
      } else {
        const errorMessage = await response.text();
        setApiError(`Login failed: ${errorMessage}`);
        console.error("Login error:", errorMessage);
      }
    } catch (error) {
      setApiError(`Login failed: ${error}`);
      console.error("Error:", error);
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
                          <strong>Forgot Password</strong>
                        </span>
                      </h2>

                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="px-4 mb-2"
                        style={{
                          border: error.email ? "1px solid red" : "none",
                          backgroundColor: "#E5E9EB",
                          borderRadius: "50px",
                        }}
                      />
                      {/* {error.email && (
                        <p style={{ color: "red" }}>{error.email}</p>
                      )} */}
                      {error.email && (
                        <div
                          className="alert alert-danger alert-dismissible fade show mt-4"
                          role="alert"
                        >
                          {error.email}
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                      )}

                      <div className="button-box">
                        <button
                          type="submit"
                          className="default-btn w-100 floatright"
                          style={{ backgroundColor: "#606B6E", color: "#fff" }}
                        >
                          Submit
                        </button>
                      </div>

                      {apiError && <p style={{ color: "red" }}>{apiError}</p>}
                      <div className="login-toggle-btn d-flex text-start">
                        {/* <input type="checkbox" />
                                                    <label>Remember me</label> */}
                        <a href="/signin">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-left-circle-fill me-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                          </svg>
                          Back to Log In
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 col-lg-6 col-xl-6 ms-auto me-auto border-0">
              <div className="login-form-container border-0 d-flex flex-column align-items-center justify-content-center">
                <img
                  src="/assets/img/ORIGINAL PRODUCTS.png"
                  className="img-fluid"
                  alt=""
                />
                <p
                  className="mt-3 mb-0"
                  style={{ fontSize: "16px", fontWeight: 500 }}
                >
                  <b>
                    All types of tobacco and related products with a guarantee.
                  </b>
                </p>
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
