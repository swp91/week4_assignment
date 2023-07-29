import React from "react";
import styled from "styled-components";

const List = ({ listData }) => {
  return (
    <Wrap>
      {listData.map((data, index) => (
        <Item key={index}>
          <h2>{data.name}</h2>
          <DataP>가격: {data.price}</DataP>
          <DataP>구입 날짜: {data.day}</DataP>
          <DataP>메모: {data.memo}</DataP>
          <DataP>
            재구매 의사: {data.repurchase === "yes" ? "한다" : "안한다"}
          </DataP>
        </Item>
      ))}
    </Wrap>
  );
};

export default List;

const Wrap = styled.div`
  width: 800px;
  margin: 0 auto;
  height: auto;
  background-color: #fefefe;
`;

const Item = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
`;

const DataP = styled.p`
  margin: 1px 0;
`;
