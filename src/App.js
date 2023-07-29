import Form from "./components/Form";
import Sorting from "./components/Sorting";
import List from "./components/List";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [listData, setListData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  console.log(listData);
  return (
    <Wrapper>
      <Form listData={listData} setListData={setListData} />
      <Sorting listData={listData} setDisplayData={setDisplayData} />
      <List listData={displayData} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 100vh;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
