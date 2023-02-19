import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Foto from './Foto.jsx'
import MiContexto from '../Contexts/MyContext.jsx';
import { useContext } from 'react'

const Galeria = ({fav = false }) => {
    const {fotos, setFotos} = useContext(MiContexto);

  return (
    <Container>
    <Row>
    {fotos.filter((f) =>  {
      if (fav) {
        return f.liked?f:null;
      } else {
        return f;
      }

    }).map((f) =>{

    return <Col><Foto foto={f}></Foto></Col>

    })
      
    }
    </Row>
  </Container>
  )
}

export default Galeria