import React from "react";
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
    }
    validate: values => {
      let errors = {};

      if (!values.emailField) {
        errors.emailField = 'Field required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email'
      }

      if(!values.pswField) errors.pswField = 'Field required';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div>Email</div>
        <input name="emailField" type="text" onChange={formink.handleChange} value={formik.value.emailField} />
        {formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div> : null}

        <div>Password</div>
        <input name="pswField" type="text" onChange={formink.handleChange} value={formik.value.paswField} />
        {formik.errors.pswField ? <div style={{color: 'red'}}>{formik.errors.pswField}</div> : null}

        <button type="submitBtn">Submit</button>>

      </form>
    </div>
      
  );
}

export default App;