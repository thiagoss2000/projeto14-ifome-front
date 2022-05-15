import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

export default function Checkout() {
  const [success, setSuccess] = useState(false)
  const [checkout, setCheckout] = useState({})

  const navigate = useNavigate()
  // const config = { Authorization: `Bearer ${user.token}` } !FIX ME PLEASE
  const config = { Authorization: `Bearer ...` }

  useEffect(() => {
    const URI = "http://localhost:5000/checkout"
    const promisse = axios.get(URI, { headers: config })
    promisse.then((response) => setCheckout(response))
    promisse.catch((e) => console.error(e))
  }, [])

  function returnMainPage() {
    const confirm = window.confirm("Do you want to return to the main page?")
    if (confirm) {
      navigate("/main")
    }
  }

  function confirmCheckout() {
    const URI = `http://localhost:5000/checkout/${checkout._id}`
    const promisse = axios.post(URI, { headers: config })
    promisse.then((response) => setSuccess(true))
    promisse.catch((e) => console.error(e))
  }

  let total = 0
  checkout.shopping?.forEach((p) => (total += parseFloat(p.value)))

  return (
    <Main>
      <Header>
        <p>iFome</p>
        <ion-icon name="arrow-back-outline" onClick={returnMainPage}></ion-icon>
      </Header>
      <h1>Checkout</h1>
      <section>
        {checkout.shopping?.map((p) => {
          return (
            <Product>
              <img src={p.img} alt="comida"></img>
              <p>{p.title}</p>
              <var>R$ {p.value}</var>
            </Product>
          )
        })}
      </section>
      <h4>Total: R${total.toFixed(2)}</h4>
      <button
        onClick={checkout.shopping ? confirmCheckout : null}
        style={checkout.shopping ? {} : { opacity: 0.6, cursor: "auto" }}
      >
        Confirm
      </button>
      {success ? (
        <Success>
          <article>
            Success!
            <button onClick={() => navigate("/main")}>Return to Main Page</button>
          </article>
        </Success>
      ) : (
        <></>
      )}
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
    border-radius: 5px;
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

const Success = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 85%;
    max-width: 400px;
    height: 40%;

    border-radius: 20px;
    background-color: #ffffff;

    font-size: 30px;
    font-weight: 700;
    color: var(--theme);
  }
`
