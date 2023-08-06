import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <GrayBackground></GrayBackground>
    </>
  );
}
const GrayBackground = styled.div`
  background-color: #5d5d5d;
  width: 100px;
  height: 100px;
`;
export default App;
