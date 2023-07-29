import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Sorting = ({ listData, setDisplayData }) => {
  const [internalDisplayData, setInternalDisplayData] = useState(listData);
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");

  useEffect(() => {
    setInternalDisplayData(listData);
  }, [listData]);

  const sortByOption = (option) => {
    let sortedData;
    switch (option) {
      case "high":
        sortedData = [...internalDisplayData].sort((a, b) => b.price - a.price);
        break;
      case "low":
        sortedData = [...internalDisplayData].sort((a, b) => a.price - b.price);
        break;
      case "newest":
        sortedData = [...internalDisplayData].sort(
          (a, b) => new Date(a.day) - new Date(b.day)
        );
        break;
      case "oldest":
        sortedData = [...internalDisplayData].sort(
          (a, b) => new Date(b.day) - new Date(a.day)
        );
        break;
      default:
        sortedData = internalDisplayData;
    }
    setInternalDisplayData(sortedData);
  };

  const filterByDate = () => {
    const filteredData = listData.filter(
      (data) =>
        new Date(data.day) >= new Date(startDay) &&
        new Date(data.day) <= new Date(endDay)
    );
    setInternalDisplayData(filteredData);
  };

  useEffect(() => {
    setDisplayData(internalDisplayData);
  }, [internalDisplayData, setDisplayData]);

  return (
    <Wrap>
      <Select onChange={(e) => sortByOption(e.target.value)}>
        <option value="">정렬</option>
        <option value="high">가격 높은 순</option>
        <option value="low">가격 낮은 순</option>
        <option value="newest">최신순</option>
        <option value="oldest">오래된순</option>
      </Select>
      <DateWrapper>
        <input
          type="date"
          value={startDay}
          onChange={(e) => setStartDay(e.target.value)}
        />
        <span> ~ </span>
        <input
          type="date"
          value={endDay}
          onChange={(e) => setEndDay(e.target.value)}
        />
        <button onClick={filterByDate}>적용</button>
      </DateWrapper>
    </Wrap>
  );
};

export default Sorting;

const Wrap = styled.div`
  width: 800px;
  margin: 0 auto;
  height: auto;
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 30px 0;
`;

const Select = styled.select`
  width: 120px;
  height: 30px;
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
