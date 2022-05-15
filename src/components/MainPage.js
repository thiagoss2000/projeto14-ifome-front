import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import userImg from "../icons/user.png"
import shoppingImg from "../icons/shopping.png"
import confirm from "../icons/confirm.png"


export default function MainPage() {
  const URL = "http://localhost:5000"
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);

  const [userMenu, setUserMenu] = useState(false);

  useEffect(() => {
    axios.get(`${URL}/products`)
    .then((response) => {
      setProducts(response.data);
    })
    .catch((err) => {console.log(err);})
  }, []);
  
  //console.log(products)

  function selectedIten(id){
    const aux = [...selected];
    if(aux.includes(id)){
      aux.splice(aux.indexOf(id), 1);
      setSelected(aux);
    } else {
      aux.push(id)
      setSelected(aux);
    }    
  }

  function sendProducts(){
    axios.post(`${URL}/purchase`, selected)
    .then((response) => {console.log(response)})
    .catch((err) => {console.log(err)})
  }

  let itens = []
  selected.forEach((selec) => {
    products.forEach((el) => {
      el.products.forEach((e) => {
        if(e.id === selec) itens.push(e);
      })
    })
  })
  console.log(itens)

  if(products.length === 0){
    console.log('loading...');
  } else {
    return (
      <Main>
        <header>
          <div className={`MenuUser ${userMenu? '' : 'displayNone'}`}>
            <h2>logout</h2>
          </div>
          <img onClick={() => setUserMenu(true)} className="icon" src={userImg} alt="user"></img>
          <h1>iFome</h1>
          <img className="icon" src={shoppingImg} alt="shpping"></img>
        </header>
        <div className="body" onClick={() => setUserMenu(false)}>
          <div className="shopping">
            {itens.map((el) => {
              return (
                <div key={el.id}>
                  <img src={el.image} alt=""></img>
                  <p>{el.name}</p>
                  <p>R${(el.price).toFixed(2)}</p>
                </div>
              )
            })}
          </div>
            <button onClick={sendProducts} className={itens.length !== 0? '' : 'displayNone'}>go shopping</button>
          <div>
            {products.map((el) => {
              return(
                <div key={el._id} className="category">
                  <h2>{el.type}</h2>
                  {el.products.map((product) => {
                    return(
                      <div key={product.id} className="products" onClick={() => selectedIten(product.id)}>
                        <img src={product.image} alt={product.name}></img>
                        <Confirm src={confirm} alt="x" disp={selected.includes(product.id)}></Confirm>
                        <h3>{product.name}</h3>
                        <p>R${(product.price).toFixed(2)}</p>
                        <p>{product.description}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </Main>
    )
  }
}

const Main = styled.main`
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
const Confirm = styled.img`
  height: 25px !important;
  width: 25px !important;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 1;
  display: ${(props) => props.disp ? 'unset' : 'none'};
`
