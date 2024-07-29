import React, { useState } from "react";
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { colorName: "", colorValue: "#000000" },
    onSubmit: (values, { resetForm }) => {
      addColor(values);
      resetForm();
      setSubmitted(true);
    },
    validate: (values) => {
      const errors = {};
      if (!values.colorName) errors.colorName = "Required";
      if (!values.colorValue) errors.colorValue = "Required";
      return errors;
    },
  });

  if (submitted) {
    return <Navigate to="/colors" />;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="colorName">Color name:</label>
      <input
        id="colorName"
        type="text"
        name="colorName"
        value={formik.values.colorName}
        onChange={formik.handleChange}
      />
      {formik.errors.colorName && formik.touched.colorName && (
        <div className="error-message">{formik.errors.colorName}</div>
      )}
      <label htmlFor="colorValue">Color value:</label>
      <input
        id="colorValue"
        type="color"
        name="colorValue"
        value={formik.values.colorValue}
        onChange={formik.handleChange}
      />
      {formik.errors.colorValue && formik.touched.colorValue && (
        <div className="error-message">{formik.errors.colorValue}</div>
      )}
      <button type="submit">Add color</button>
    </form>
  );
};

export default NewColorForm;
