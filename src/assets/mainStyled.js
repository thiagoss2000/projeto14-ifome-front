import styled from "styled-components";

export const Main = styled.main`
.displayNone {
  display: none;
}
.MenuUser {
  top: 60px;
  position: absolute;
  background-color: #dddddd;
  width: 200px;
  height: 50px;
  z-index: 2;
}
.MenuUser h2 {
  width: 100%;
  margin-top: 4px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
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
header p {
  position: absolute;
  right: 46px;
  top: 38px;
}
.icon {
  margin-inline: 10px;
  height: 40px;
  color: white;
  cursor: pointer;
}
.shopping {
  margin-inline: 15px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  overflow: auto;
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
  margin-left: 50%;
  transform: translate(-50%, 0);
  background-color: var(--theme);
  color: #000;
  margin-block: 10px;
  width: 80vw;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.category {
  margin-inline: 15px;
  padding-inline: 20px;
  border-radius: 15px;
  background-color: #dddddd;
  height: 240px !important;
  margin-top: 20px;
  height: 180px;
  display: flex;
  position: relative;
  overflow: auto;
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
.products h3 {
  margin-inline: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #252525;
}
.products p {
  margin-top: 5px;
  margin-inline: 10px;
  color: #252525;
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