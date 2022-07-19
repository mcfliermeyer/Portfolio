import styled from 'styled-components'

const StyledNewSection = styled.div`
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  .title {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 2.5rem;
    color: #fe7868;
    margin: 0;
    letter-spacing: -1px;
    line-height: 80%;
  }
  .subtitle {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 0.875rem;
    color: #34cace;
    margin: 0;
    letter-spacing: -.5px;
  }
`;


type Props = {
  title: String,
  subtitle?: String,
}
const NewSection = (props: Props) => {
  return (
    <StyledNewSection>
      <h1 className="title">{props.title}</h1>
      {props.subtitle ? <h2 className="subtitle">{props.subtitle}</h2> : <div></div>}
    </StyledNewSection>
  )
}
export default NewSection