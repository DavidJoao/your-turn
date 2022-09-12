import { useContext, useEffect, useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { Context } from '../App'

function Play(){

    const { colorTemplate } = useContext(Context)
    const [ player, setPlayer ] = useState('')
    const [ playersList, setPlayersList ] = useState([])
    const playersArray = []

    const handleChange = (e) => {
        console.log(e.target.value)
        setPlayer(e.target.value)
    }
    
    const addPlayer = (e) => {
        e.preventDefault()
        const playerItem = {
            id: Math.floor(Math.random() * 1000),
            value: player,
        }

    setPlayersList(oldList => [...oldList, playerItem])
    setPlayer('')
    console.log(playerItem)
    }

    return(
        <div style={{width:"100%", height:'100vh', backgroundColor:`${colorTemplate.primary}`, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{border:`5px solid ${colorTemplate.secondary}`, width:'90%', height:"90vh", borderRadius:'10px', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h3>Enter Players:</h3>
                <InputGroup style={{width:'90%'}}>
                    <Form.Control onChange={handleChange} placeholder="Player's name" value={player}/>
                    <Button style={{backgroundColor:`${colorTemplate.secondary}`, border:`1px solid ${colorTemplate.secondary}`, color:'white'}} onClick={addPlayer}>Add Player</Button>
                </InputGroup>
                <div style={{border:`2px solid ${colorTemplate.secondary}`, width:'90%', height:"30vh", marginTop:"2%", overflow:'scroll', borderRadius:"10px", boxShadow:`${colorTemplate.shadow}`}}>
                    <ul style={{display:'flex', flexDirection:'column', alignItems:"center", padding:"1%"}}>
                        {playersList.map(player => {
                            return(
                                <li key={player.id} style={{padding:'1%', border:'2px solid black', borderRadius:'10px', listStyle:'none', width:'50%', textAlign:"center", margin:"1%", backgroundColor:`white`, boxShadow:"0px 5px 19px 0px rgba(0,0,0,0.75)", fontSize:"1rem"}}>{player.value}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Play