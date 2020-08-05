import React, { useState } from "react";
import "./styles.css";

export default function LoginTest() {
  function FormInput({ label, type }) {
    return (
      <div>
        <label>{label}</label>
        <br />
        <input type={type} />
      </div>
    );
  }

  return (
    <div>
      <form>
        <FormInput label="Usaasdasder" type="name" />

        <FormInput label="Password" type="password" />
      </form>
    </div>
  );
}
