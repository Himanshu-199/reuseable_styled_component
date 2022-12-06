import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import RadioButtons from "../components/RadioButtons";

const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  favoriteColor: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.number().required("Required"),
  Gender: Yup.string().required("Required"),
});

const options = [
  {
    name: "Male",
    value: "male",
  },
  {
    name: "Female",
    value: "female",
  },
];

export default function FormComponent({ fromSubmited }) {
  const onSubmit = (e) => {
    fromSubmited(e);
  };

  const getErrorString = (errors, touched, input) => {
    return errors[input] ? errors[input] : "";
  };

  return (
    <div>
      <Formik
        initialValues={{}}
        validationSchema={formValidationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <Card>
              <Input
                error={getErrorString(errors, touched, "name")}
                id="name"
                name="name"
                label="Name"
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              <Input
                error={getErrorString(errors, touched, "surname")}
                id="surname"
                name="surname"
                label="Surname"
                type="text"
                placeholder="Enter your surname"
                value={values.surname}
                onChange={handleChange}
              />
              <Input
                error={getErrorString(errors, touched, "email")}
                id="email"
                email="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              <Input
                error={getErrorString(errors, touched, "age")}
                id="age"
                name="age"
                label="Age"
                type="number"
                placeholder="Enter your Age"
                value={values.age}
                onChange={handleChange}
              />
              <RadioButtons
                label="Gender"
                onChange={handleChange}
                options={options}
                value={values.Gender}
                error={getErrorString(errors, touched, "Gender")}
              />
              <Input
                error={getErrorString(errors, touched, "favoriteColor")}
                id="favorite-color"
                label="Favorite color"
                type="test"
                name="favoriteColor"
                placeholder="Enter your favorite color"
                value={values.favoriteColor}
                onChange={handleChange}
              />
              <div className="buttons">
                <Button
                  title="Reset"
                  type="reset"
                  backgroundColor="red"
                  textColor="#fff"
                />
                <Button
                  title="Submit"
                  type="submit"
                  backgroundColor="green"
                  textColor="#fff"
                />
              </div>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
