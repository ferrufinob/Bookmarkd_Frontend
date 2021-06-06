import styled from "styled-components";

export const Column = styled.div`
  margin: 50px auto;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  img {
    display: block;
    width: 100%;
    border-radius: 5px;
  }
  img:hover {
    filter: brightness(50%);
  }
  column-gap: 15px;
`;

export const Wrapper = styled.div`
  display: block;
  float: left;
  width: 248px;
  height: auto;
  border: 1px 1px 1px 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;

  figcaption {
    line-height: 1.5;
    color: #444;
    display: block;
    margin: 15px 0 15px 0;
    float: left;
    font-size: 16px;
    font-weight: normal;
    width: 100%;
    text-align: left;
  }
`;
