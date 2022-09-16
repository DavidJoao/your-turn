import { useState, useContext } from 'react'
import { Offcanvas, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Context } from '../App'

function StartPage(){

    const [show, setShow] = useState(false);
    const { colorTemplate } = useContext(Context)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div style={{ width:'100%', height:'100vh', backgroundColor:'#b8a161', display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            <h1 style={{marginBottom:"2%"}}>Your Turn: Drinking Game</h1>
            <Button style={{border:"2px solid #524b37", backgroundColor:"transparent", boxShadow:"0px 0px 17px 0px rgba(0,0,0,0.75)", color:"black", fontWeight:"500"}} onClick={handleShow}>Don't know the rules? Click here!</Button>
            <Offcanvas style={{backgroundColor:`${colorTemplate.secondary}`, color:"white", border:'3px solid black'}} placement='bottom' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Rules</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <h6>1.- Click on 'Start Game'</h6>
                <h6>2.- Enter all players</h6>
                <h6>3.- Once all players are in the list, click the 'DRINK' button</h6>
                <h6>4.- Player in red dot drinks</h6>
                </Offcanvas.Body>
            </Offcanvas>
            <Button style={{border:"2px solid #524b37", backgroundColor:"transparent", margin:'1%', boxShadow:"0px 0px 17px 0px rgba(0,0,0,0.75)", color:"black"}}><Link className='nav-link' to='/play'>Start Game</Link></Button>
        </div>
    )
}

export default StartPage