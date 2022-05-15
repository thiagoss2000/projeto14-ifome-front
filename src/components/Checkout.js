import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

export default function Checkout() {
  const [success, setSuccess] = useState({ status: false, type: "confirm" }) // axios request status
  const [checkout, setCheckout] = useState({}) // obj with data from checkout

  const navigate = useNavigate()
  const token = sessionStorage.token
  const config = { Authorization: `Bearer ${token}` }

  // get obj with data from checkout
  useEffect(() => {
    const URI = "http://localhost:5000/checkout"
    const promisse = axios.get(URI, { headers: config })
    promisse.then((response) => setCheckout(response.data))
    promisse.catch((e) => console.error(e))
  }, [])

  // return to main page
  function returnMainPage() {
    const confirm = window.confirm("Do you want to return to the main page?")
    if (confirm) {
      navigate("/main")
    }
  }

  // confirm checkout
  function confirmCheckout() {
    const URI = `http://localhost:5000/checkout/${checkout._id}`
    const promisse = axios.post(URI, {}, { headers: config })
    promisse.then((response) => setSuccess({ ...success, status: true }))
    promisse.catch((e) => console.error(e))
  }

  // delete checkout
  function deleteCheckout() {
    const confirm = window.confirm("Do you want to delete this checkout?")
    if (confirm) {
      const URI = `http://localhost:5000/checkout/${checkout._id}`
      const promisse = axios.delete(URI, { headers: config })
      promisse.then((response) => setSuccess({ status: true, type: "delete" }))
      promisse.catch((e) => console.error(e))
    }
  }

  // get total price of checkout
  let total = 0
  checkout.shpping?.forEach((p) => (total += parseFloat(p.price)))

  return (
    <Main>
      <Header>
        <p>iFome</p>
        <ion-icon name="arrow-back-outline" onClick={returnMainPage}></ion-icon>
      </Header>
      <h1>Checkout</h1>

      {/* products section */}
      <section>
        {checkout.shpping?.map((p, i) => {
          return (
            <Product key={`${i} - ${p._id}`}>
              <img src={p.image} alt="comida"></img>
              <p>{p.name}</p>
              <var>R$ {p.price.toFixed(2)}</var>
            </Product>
          )
        })}
      </section>

      <h4>Total: R${total.toFixed(2)}</h4>

      {/* buttom to confirm checkout */}
      <button
        onClick={checkout.shpping ? confirmCheckout : null}
        style={checkout.shpping ? {} : { opacity: 0.6, cursor: "auto" }}
      >
        Confirm
      </button>

      {/* buttom to delete checkout */}
      <button
        className="deleteButton"
        onClick={checkout.shpping ? deleteCheckout : null}
        style={checkout.shpping ? {} : { opacity: 0.6, cursor: "auto" }}
      >
        Delete Checkout
      </button>

      {/* success screen */}
      {success.status ? (
        <Success>
          <article style={success.type === "delete" ? { color: "var(--red)" } : {}}>
            Success!
            <button
              style={success.type === "delete" ? { backgroundColor: "var(--red)" } : {}}
              onClick={() => navigate("/main")}
            >
              Return to Main Page
            </button>
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
    margin: 10px auto;
    cursor: pointer;
  }

  .deleteButton {
    margin: 10px auto 25px;
    background-color: var(--red);
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
  position: fixed;
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
