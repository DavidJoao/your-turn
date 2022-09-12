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
                <InputGroup style={{width:'40%'}}>
                    <Form.Control onChange={handleChange} placeholder="Player's name" value={player}/>
                    <Button style={{backgroundColor:`${colorTemplate.primary}`, border:`1px solid ${colorTemplate.secondary}`, color:'black'}} onClick={addPlayer}>Add Player</Button>
                </InputGroup>
                <div style={{border:"1px solid black", width:'40%', height:"30vh", marginTop:"2%"}}>
                    <ul>
                        {playersList.map(player => {
                            return(
                                <li key={player.id}>{player.value}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Play