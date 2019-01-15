import { Formik, Field, Form, ErrorMessage } from 'formik';
import Fetch from 'isomorphic-unfetch'

const RegisterForm = () => (
  <div>
    <Formik
      initialValues={{ email: '' , username: '' , password: ''}}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          fetch('http://127.0.0.1:5000/createaccount', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json',
              'Access-Control-Allow-Origin':'*'
            },
            body: values.json()
          })
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            name="email"
            placeholder='Email'
          />
          <input
            type="username"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.username}
            name="username"
            placeholder='username'
          />
          <input
            type="password"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.password}
            name="password"
            placeholder='password'
          />
          <style jsx>{`
            input {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              }
            `}</style>
          {props.errors.username && <div id="feedback">{props.errors.username}</div>}
          <button type="submit" disabled={props.isSubmitting}>Submit</button>
        </form>
      )}
    />
  </div>
);


export default RegisterForm
