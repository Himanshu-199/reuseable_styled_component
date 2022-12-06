import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Typography from "../components/Typography";
import FormComponent from "./Form";
import "./style.css";

export default function Home() {
  const [formData, setFormData] = useState(null);
  const fromSubmited = (values) => {
    setFormData(values);
  };
  return (
    <div className="box">
      <div>
        <Heading primaryText="hello title" subHeading="Sub title by props" />
        <Heading primaryText="hello title">
          <SubHeading text="Sub title by children components" />
        </Heading>
        <Typography text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </div>
      <FormComponent fromSubmited={fromSubmited} />
      {formData && (
        <Card backgroundColor={"red"}>
          <Typography text={formData?.name} />
          <Typography text={formData?.surname} />
          <Typography text={formData?.email} />
          <Typography text={formData?.age} />
          <Typography text={formData?.gender} />
        </Card>
      )}
      <Card
        title={"Card title with props"}
        subTitle={"Card sub title with props"}
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <Card>
        <Heading primaryText="Card Title" />
        <SubHeading text="Sub title by children components" />
        <Typography text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      </Card>

      <div>
        <Button title="Primary" variant="primary" />
        <Button title="Drak" variant="drak" />
        <Button title="Light" variant="light" />
        <Button title="Custom" backgroundColor="green" textColor="#fff" />
      </div>
    </div>
  );
}
