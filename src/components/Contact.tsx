import styled from "styled-components";
import NewSection from "./NewSection";
const FORM_ENDPOINT = "change to .env file";

const StyledContact = styled.div`
  form {
    display: flex;
    flex-direction: column;
    padding: 0em 1.5em 1.5em;
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
    margin: 1.5em 0 0;
    border: none;
    box-shadow: 0 3px 2px 1px rgb(128, 128, 128, 0.3);
  }
`;

type Props = {};
const Contact = (props: Props) => {
  const handleSubmit = () => {
    console.log("handling submit");
  };

  return (
    <StyledContact>
      <NewSection title={"Contact"} subtitle={"me for more information"} />
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <input type="text" placeholder="your name" className="name" required />
        <input type="email" placeholder="email" className="email" required />
        <textarea
          name="message"
          placeholder="message"
          id=""
          cols={30}
          rows={4}
          className="message"
        ></textarea>
        <button className="send-msg-btn" onClick={() => handleSubmit()}>
          Send message
        </button>
      </form>
    </StyledContact>
  );
};
export default Contact;
