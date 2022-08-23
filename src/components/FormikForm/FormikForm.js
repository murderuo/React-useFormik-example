import './index.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const initialValues = { firstName: '', lastName: '', email: '' };

function FormikForm() {
  const [formdata, setFormData] = useState(initialValues);

  const { values, handleChange, handleSubmit, handleReset, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: values => {
        setFormData(values);
        handleReset();
      },
      validationSchema: Yup.object({
        firstName: Yup.string().label('First Name').required(),
        lastName: Yup.string().label('Last Name').required(),
        email: Yup.string().email().required(),
      }),
    });
  // console.log(errors, touched);
  // console.log(formdata, handleChange, handleSubmit);
  // console.log(errors);
  return (
    <div className="container">
      <main>
        <div className="form-component">
          <form onSubmit={handleSubmit}>
            <div className="first-name">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChange}
                value={values.firstName}
              />
              {touched.firstName && errors.firstName && (
                <span className="text-red-400">{errors.firstName}</span>
              )}
            </div>

            <div className="last-name">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={handleChange}
                value={values.lastName}
              />
              {touched.lastName && errors.lastName && (
                <span className="text-red-400">{errors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              {touched.email && errors.email && (
                <span className="text-red-400">{errors.email}</span>
              )}
            </div>
            <div className="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </main>
        <code className='result'><div>{JSON.stringify(formdata,null,2)}</div></code>
    </div>
  );
}

export default FormikForm;
