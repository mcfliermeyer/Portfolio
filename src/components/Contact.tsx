import React, { useState } from "react";
import styled from "styled-components";
import NewSection from "./NewSection";
const { REACT_APP_USER_ID, REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID } =
  process.env;
const FORM_ENDPOINT = "change to .env file";

const StyledContact = styled.div`
  form {
    display: flex;
    flex-direction: column;
    padding: 0em 1.5em 1.5em;
    max-width: 700px;
    margin-inline: auto;
  }
  input,
  textarea {
    margin: 0.5em 0;
    padding: 1em 1em;
    border-radius: 1em;
    border: none;
    background-color: #ffb1a8;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
    ::placeholder {
      color: white;
      font-size: 1rem;
      font-weight: 600;
      font-family: ${(props) => props.theme.fonts.nameTitleFont};
    }
    :focus::placeholder {
      color: transparent;
    }
    :focus {
      outline: ${(props) => props.theme.colors.primaryBlue} 4px solid;
    }
  }
  textarea {
    resize: none;
  }
  .send-msg-btn {
    box-sizing: border-box;
    line-height: 1em;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primaryBlue};
    color: white;
    font-size: 1rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
    text-decoration: none;
    padding: 1em 2em;
    margin-top: 1.5em;
    margin-inline: auto;
    border: none;
    box-shadow: 0 3px 2px 1px rgb(128, 128, 128, 0.3);
  }
`;

type Props = {};
const Contact = (props: Props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <StyledContact>
      <NewSection title={"Contact"} subtitle={"me for more information"} />
      <form onSubmit={handleSubmit}>
        <input
          value={formState.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="your name"
          className="name"
          required
        />
        <input
          value={formState.email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="email"
          className="email"
          required
        />
        <textarea
          value={formState.message}
          name="message"
          onChange={handleChange}
          placeholder="message"
          id=""
          cols={30}
          rows={4}
          className="message"
        ></textarea>
        <button className="send-msg-btn" onClick={handleSubmit}>
          Send message
        </button>
      </form>
    </StyledContact>
  );

  function handleChange(e: React.ChangeEvent): void {
    const target = e.target as HTMLInputElement;
    setFormState((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  }

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault(); //not sure if needed but here anyways
    if (!isValidEmail(formState.email)) {
      console.log("please enter email")
      return
    }

    let emailData = {
      service_id: REACT_APP_SERVICE_ID,
      template_id: REACT_APP_TEMPLATE_ID,
      user_id: REACT_APP_USER_ID,
      template_params: {
        name: `${formState.name}`,
        email: `${formState.email}`,
        message: `${formState.message}`,
      },
    };

    setFormState({
      name: "",
      email: "",
      message: "",
    });

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((res) => res.text()) //response is html and not json
      .then((data) => data);
  }

  function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
};
export default Contact;
