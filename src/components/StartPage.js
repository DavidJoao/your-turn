import { useState } from 'react'
import { Offcanvas, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function StartPage(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div style={{ width:'100%', height:'100vh', backgroundColor:'#b8a161', display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            <h1 style={{marginBottom:"2%"}}>Your Turn: Drinking Game</h1>
            <Button style={{border:"2px solid #524b37", backgroundColor:"transparent", boxShadow:"0px 0px 17px 0px rgba(0,0,0,0.75)", color:"black", fontWeight:"500"}} onClick={handleShow}>Don't know the rules? Click here!</Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            <Button style={{border:"2px solid #524b37", backgroundColor:"transparent", margin:'1%', boxShadow:"0px 0px 17px 0px rgba(0,0,0,0.75)", color:"black"}}><Link className='nav-link' to='/play'>Start Game</Link></Button>
        </div>
    )
}

export default StartPage