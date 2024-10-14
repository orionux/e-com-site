"use client";

import React, { useState, useEffect } from "react";
import { apiUrl } from "../api/apiServices";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import Toast from "@/Components/Toast";

const SignIn = () => {
  const router = useRouter();
  const { setUserDetails } = useUser();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const [apiError, setApiError] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [customerEmail, setCustomerEmail] = useState(String);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCustomerEmail = localStorage.getItem('logged_email');
      setCustomerEmail(storedCustomerEmail || '');
      // window.location.href = "/dashboard";

    }
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    let newError = { email: "", password: "" };

    if (!formData.email) {
      newError.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email address is invalid";
      valid = false;
    }

    if (!formData.password) {
      newError.password = "Password is required";
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
    formDataToSend.append("password", formData.password);

    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("Login successful:", data);
        // console.log("context : ", data.user.email, data.user.customer_details.customer_name, data.user.customer_details.user_id)
        setUserDetails(
          data.user.email,
          data.user.customer_details.customer_name,
          data.user.customer_details.user_id
        );
        if (data.user.api_token) {
          document.cookie = `api_token=${data.user.api_token}; path=/; secure; SameSite=Strict`;
          // window.location.href = "/dashboard";
          setToastMessage("Login successful!");
          setToastType("success");
          router.push("/dashboard");
        } else {
          
        }
      } else {
        // const errorMessage = await response.text();
        // setApiError(errorMessage);
        // setToastMessage("Login failed. Please check your credentials.");
        // setToastType("error");
        if (customerEmail) {
          // setApiError("Your email has been successfully verified. Your account is currently undergoing the verification process. Please wait while we complete this step. Thank you for your patience!");
          setToastMessage("Your email has been successfully verified. Your account is currently undergoing the verification process. Please wait while we complete this step. Thank you for your patience!");
          setToastType("success");
        } else {
          // setApiError("Login failed. Please try again.");
          setToastMessage("Login failed. Please try again.");
          setToastType("error");
        }
      }
    } catch (error) {
      setApiError("Login failed. Please check your credentials.");
      setToastMessage("Login failed. Please check your credentials.");
      setToastType("error");
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
                          <strong>Log in</strong>
                        </span>
                      </h2>

                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="px-4"
                        style={{
                          border: error.email ? "1px solid red" : "none",
                          backgroundColor: "#E5E9EB",
                          borderRadius: "50px",
                        }}
                      />
                      {error.email && (
                        <p style={{ color: "red" }}>{error.email}</p>
                      )}

                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="px-4"
                        style={{
                          border: error.password ? "1px solid red" : "none",
                          backgroundColor: "#E5E9EB",
                          borderRadius: "50px",
                        }}
                      />
                      {error.password && (
                        <p style={{ color: "red" }}>{error.password}</p>
                      )}

                      <div className="button-box">
                        <div className="login-toggle-btn d-flex text-start">
                          {/* <input type="checkbox" />
                                                    <label>Remember me</label> */}
                          <a href="/forgot-password">Forgot Password?</a>
                        </div>
                        <button
                          type="submit"
                          className="default-btn w-100 floatright"
                          style={{ backgroundColor: "#606B6E", color: "#fff" }}
                        >
                          Login
                        </button>
                        <p
                          style={{ fontSize: "16px" }}
                          className="mt-3 text-center"
                        >
                          <b>
                            Don&apos;t you have an account?{" "}
                            <a href="/register">Register Now</a>
                          </b>
                        </p>
                      </div>

                      {/* {apiError && (
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
                      )} */}
                    </form>
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
