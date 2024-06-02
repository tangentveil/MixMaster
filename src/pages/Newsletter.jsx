import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.message);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our Newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>

        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="Ani"
        />
      </div>

      {/*last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last Name
        </label>

        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="Ani"
        />
      </div>

      {/* email */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Email
        </label>

        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue="test@test.com"
        />
      </div>

      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default Newsletter;
