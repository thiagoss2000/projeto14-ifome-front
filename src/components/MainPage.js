import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Main, Confirm } from "../assets/mainStyled"
import userImg from "../icons/user.png"
import shoppingImg from "../icons/shopping.png"
import confirm from "../icons/confirm.png"

export default function MainPage() {
  const URL = "http://localhost:5000"
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [numItens, setNumItens] = useState('');
  const [selected, setSelected] = useState([]);
  const [userMenu, setUserMenu] = useState(false);

  const user_id = sessionStorage.user;
  const token = sessionStorage.token;

  const category = ['fast-food', 'saladas'];

  useEffect(() => {
    axios.get(`${URL}/products`, {headers: {'user': user_id}})
    .then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products);
      if(response.data.qtd > 0)
      setNumItens(response.data.qtd);
    })
    .catch((err) => {console.log(err);})
  }, [selected]);
  
  function logout(){
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
  }

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
    if(!user_id){
      navigate("/");
      return;
    }
    axios.post(`${URL}/purchase`, selected, {headers: {'user': user_id, 'token': token}})
    .then((response) => {console.log(response); setSelected([])})
    .catch((err) => {console.log(err)})
  }

  let itens = []
  selected.forEach((selec) => {
    products.forEach((el) => {
        if(el.id === selec) itens.push(el);
      })
  })

  if(products.length === 0){
    console.log('loading...');
  } else {
    return (
      <Main>
        <header>
          <div className={`MenuUser ${userMenu? '' : 'displayNone'}`}>
            <h2 onClick={logout}>logout</h2>
          </div>
          <img onClick={() => setUserMenu(true)} className="icon" src={userImg} alt="user"></img>
          <h1>iFome</h1>
          <p>{numItens}</p>
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
            {category.map((el) => {
              return(
                <div key={el} className="category">
                  <h2>{el}</h2>
                  {products.map((product) => {
                    if(product.type === el){
                      return(
                        <div key={product.id} className="products" onClick={() => selectedIten(product.id)}>
                          <img src={product.image} alt={product.name}></img>
                          <Confirm src={confirm} alt="x" disp={selected.includes(product.id)}></Confirm>
                          <h3>{product.name}</h3>
                          <p>R${(product.price).toFixed(2)}</p>
                          <p>{product.description}</p>
                        </div>
                      )
                    }
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
