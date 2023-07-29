import React, { useState } from "react";
import styled from "styled-components";

const Form = ({ setListData }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [day, setDay] = useState("");
  const [memoChecked, setMemoChecked] = useState(false);
  const [memo, setMemo] = useState("");
  const [repurchase, setRepurchase] = useState("");

  const toggleMemo = () => {
    setMemoChecked(!memoChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEntry = {
      name,
      price,
      day,
      memo: memoChecked ? memo : "",
      repurchase,
    };

    setListData((list) => [...list, newEntry]);

    setName("");
    setPrice("");
    setDay("");
    setMemo("");
    setMemoChecked(false);
    setRepurchase("");
  };

  return (
    <Wrap>
      <Formdata action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
          이름
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="price">
          가격
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label htmlFor="day">
          구입날짜
          <input
            type="date"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </label>
        <label htmlFor="memo">
          메모
          <input
            type="checkbox"
            checked={memoChecked}
            onChange={toggleMemo}
            id="memo"
          />
          {memoChecked && (
            <input
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
          )}
        </label>
        <label htmlFor="rep">
          재구매의사
          <label>
            <input
              type="radio"
              id="yes"
              name="rep"
              value="yes"
              checked={repurchase === "yes"}
              onChange={(e) => setRepurchase(e.target.value)}
            />
            한다
          </label>
          <label>
            <input
              type="radio"
              id="no"
              name="rep"
              value="no"
              checked={repurchase === "no"}
              onChange={(e) => setRepurchase(e.target.value)}
            />
            안한다
          </label>
        </label>
        <input type="submit" value="Submit" />
      </Formdata>
    </Wrap>
  );
};

export default Form;

const Wrap = styled.div`
  width: 800px;
  margin: 0 auto;
  height: auto;
  background-color: #fefefe;
`;

const Formdata = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
