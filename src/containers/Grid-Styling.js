import styled from "styled-components";

export const Column = styled.div`
  margin: 50px auto;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  img {
    border-radius: 20px;
    height: auto;
    width: 400px;
  }
  img:hover {
    filter: brightness(50%);
  }
`;

export const Wrapper = styled.div`
  height: 300px;
  width: 450px;
  overflow: hidden;
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 2px 15px;
  padding: 15px;
  padding-bottom: 10px;
  border-radius: 20px;

  figcaption {
    border-bottom: 1px solid #ccc;
    line-height: 1.5;
    color: #444;
  }
`;
