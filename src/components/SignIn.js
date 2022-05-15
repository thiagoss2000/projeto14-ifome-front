import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Main, StyledLink } from "../assets/signInStyled"


export default function SignIn() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [valid, setValid] = useState(true)

  const inputs = [
    { type: "email", placeholder: "E-mail" },
    { type: "password", placeholder: "Password" },
  ]

  async function submitForm(e) {
    e.preventDefault()
    setLoading(true)
    const URI = "http://localhost:5000/sign-in"

    const body = {
      email: e.target[0].value,
      password: e.target[1].value,
    }

    axios.post(URI, body)
    .then((res) => {
      sessionStorage.setItem('user', res.data.user_id);
      sessionStorage.setItem('token', res.data.token);
      navigate("/main")
    }) 
    .catch((e) => {
      setValid(false)
      setLoading(false)
    })
  }

  function showPassword(e) {
    if (e.target.checked) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  return (
    <Main>
      <h1>iFome</h1>
      {/* <p>Sign In</p> */}
      <form onSubmit={(e) => submitForm(e)}>
      {inputs.map((i) => {
          return (
            <input
              key={i.placeholder}
              type={i.type === "password" && show ? "text" : i.type}
              placeholder={i.placeholder}
              minLength={i.type === "password" ? "6" : ""}
            />
          )
        })}
        <div>
          <input type="checkbox" id="show" className="checkbox" onClick={(e) => showPassword(e)} />
          <label htmlFor="show">Show password</label>
        </div>
        <button
          type="submit"
          style={loading ? { opacity: 0.6, cursor: "auto" } : {}}
          disabled={loading ? true : false}
        >
          Enter
        </button>
      </form>
      <StyledLink to={"/sign-up"}>Register new account</StyledLink>
      {valid ? <></> : <p>failed to login, try again</p>}
    </Main>
  )
}
