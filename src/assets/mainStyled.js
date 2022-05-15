import styled from "styled-components";

export const Main = styled.main`
.displayNone {
  display: none;
}
.MenuUser {
  top: 60px;
  position: absolute;
  background-color: azure;
  width: 200px;
  height: 100px;
  z-index: 2;
}
header {
  position: relative;
  height: 60px;
  background-color: var(--theme);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  color: #ffffff;
}
.icon {
  margin-inline: 10px;
  height: 40px;
  color: white;
}
.shopping {
  display: flex;
}
.shopping div {
  width: 100px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.shopping img {
  height: 60px;
  width: 80px;
}
.shopping p {
  text-align: center;
}
button {
  background-color: azure;
  color: #000;
  margin-block: 10px;
  width: 80vw;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
}
.category {
  //background-color: antiquewhite;
  margin-top: 20px;
  height: 180px;
  display: flex;
  position: relative;
}
h2 {
  font-size: 20px;
  position: absolute;
  top: 10px;
}
.products {
  cursor: pointer;
  position: relative;
}
.products img {
  margin-top: 40px;
  margin-inline: 5px;
  height: 100px;
  width: 160px;
  border-radius: 10px;
}
`
export const Confirm = styled.img`
height: 25px !important;
width: 25px !important;
position: absolute;
left: 5px;
top: 5px;
z-index: 1;
display: ${(props) => props.disp ? 'unset' : 'none'};
`