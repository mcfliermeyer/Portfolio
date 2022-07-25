import styled from "styled-components";
const FORM_ENDPOINT = "change to .env file";

const StyledContact = styled.div``;

type Props = {};
const Contact = (props: Props) => {
  const handleSubmit = () => {
    console.log("handling submit");
  };

  return (
    <StyledContact>
      <form 
        action={FORM_ENDPOINT} 
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >

      </form>
    </StyledContact>
  );
};
export default Contact;
