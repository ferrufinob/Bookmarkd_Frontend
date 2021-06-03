import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 8px;
`;

export const FormWrapper = styled.div`
  width: 382px;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 80px;
  background: #eae7dc;
  border-radius: 15px;

  a {
    text-decoration: none;
    color: #303c6c;
  }
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }
  button {
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 17px;
  padding: 10px;
  background-color: #f4976c;
  color: white;
  font-weight: 700;
`;
