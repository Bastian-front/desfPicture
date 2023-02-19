import React from 'react';
import Card from 'react-bootstrap/Card';
import MiContexto from '../Contexts/MyContext.jsx';
import { useContext } from 'react';
import { FaRegHeart } from 'react-icons/fa';


const Foto = ({foto, fav = false}) => {

const {fotos, setFotos} = useContext(MiContexto);

const setFavorito = (id) => {

    const clickFoto = fotos.findIndex((f) => f.id === id);
    fotos[clickFoto].liked = !fotos[clickFoto].liked;
    setFotos([...fotos]);

}


  return (
    <Card className='card' style={{ width: '18rem', margin: '16px', padding: '1rem' }} >
    <Card.Img variant="top" src={foto.src.medium} 
    alt='imagen' className='img'/>
    <p>{foto.alt}</p>
    {!fav && <FaRegHeart icon="FaRegHeart" onClick={()=> setFavorito(foto.id)} style={{color:foto.liked?"red":"black",
    cursor: "pointer", width: "100%"}}/>}
    

  </Card>
  )
}

export default Foto