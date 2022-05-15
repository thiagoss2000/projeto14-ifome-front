import styled from "styled-components"
import { Link } from "react-router-dom"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--theme);
  overflow-y: auto;
  form {
    width: 90%;
  }
  h1 {
    font-family: "Saira Stencil One", cursive;
    margin: 50px 0 24px;
    font-size: 32px;
    color: #ffffff;
  }
  input {
    width: 100%;
    height: 58px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 0 15px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 46px;
    margin: 13px 0 36px;
    border: none;
    border-radius: 5px;
    background-color: var(--theme-light);
    font-size: 20px;
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
  }
  p {
    margin-bottom: 25px;
    font-size: 20px;
    font-weight: 700;
    color: var(--error);
  }
  div {
    display: flex;
    align-items: center;
    height: 25px;
  }
  .checkbox {
    margin: 0 10px;
    width: 25px;
    cursor: pointer;
  }
  label {
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 25px;
`