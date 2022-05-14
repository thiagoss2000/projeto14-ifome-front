import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Checkout() {
  const navigate = useNavigate()

  function returnMainPage() {
    const confirm = window.confirm("Do you want to return to the main page?")
    if (confirm) {
      navigate("/main")
    }
  }

  function confirmCheckout() {
    console.log("foi")
  }

  const url = "https://img.itdg.com.br/tdg/images/blog/uploads/2017/07/shutterstock_413580649.jpg?w=1200"
  return (
    <Main>
      <Header>
        <p>iFome</p>
        <ion-icon name="arrow-back-outline" onClick={returnMainPage}></ion-icon>
      </Header>
      <h1>Checkout</h1>
      <section>
        <Product>
          <img src={url} alt="comida"></img>
          <p>Macarrão com molho tomate</p>
          <var>R$ 20.99</var>
        </Product>
      </section>
      <h4>Total: R$20.99</h4>
      <button onClick={confirmCheckout}>Confirm</button>
    </Main>
  )
}

const Main = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  overflow: auto;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 30px;
    font-weight: 700;
    color: var(--theme-light);

    margin: 10px 20px 0;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: var(--theme-light);

    margin: 10px auto 0;
  }

  button {
    min-height: 45px;
    width: 75%;
    max-width: 400px;

    background-color: var(--theme);
    outline: none;
    border: none;

    color: #ffffff;
    font-size: 22px;
    font-weight: 700;

    border-radius: 10px;
    margin: 10px auto 25px;
    cursor: pointer;
  }
`

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 20px;

  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.5);
  background-color: var(--theme);
  color: #ffffff;

  p {
    font-family: "Saira Stencil One", cursive;
    font-size: 35px;
  }

  ion-icon {
    font-size: 35px;
    cursor: pointer;
  }
`

const Product = styled.article`
  position: relative;
  display: flex;
  align-items: center;

  height: 80px;
  width: calc(100% - 20px);
  border-radius: 10px;

  margin: 15px 10px;
  padding: 10px;
  background-color: #dddddd;

  font-size: 16px;

  img {
    max-height: 60px;
    max-width: 80px;

    margin-right: 10px;
  }

  p {
    width: 50%;
    max-height: 60px;
    overflow: hidden;

    margin-right: 10px;
  }

  var {
    position: absolute;
    right: 10px;
  }
`
