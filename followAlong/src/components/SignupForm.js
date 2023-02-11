import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const initialValues = {
   username: localStorage.getItem('username')  ? localStorage.getItem('username') : '', email: localStorage.getItem('email') ? localStorage.getItem('email') : ""
}

export default function SignupForm() {
  const classes = useStyles();
  
  const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

  const handleChanges = e => {
    console.log(e.target.name, "e.target.name") //=> firstName, lastName, email
    setValues({
      ...values,
      [e.target.name] : e.target.value
     });
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues)
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(values.firstName + " " + values.lastName + " " + values.email);
  };

  return([values, handleChanges, clearForm, handleSubmit]);
}

const [values, handleChanges, clearForm, handleSubmit] = useForm('sing-in', initialValue, callback);

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="User Name"
            className={classes.textField}
            name="username"
            value={values.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Last Name"
            className={classes.textField}
            name="lastname"
            value={values.lastname}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="email"
            className={classes.textField}
            name="email"
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
  }