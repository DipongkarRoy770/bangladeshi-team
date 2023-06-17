import { useEffect, useState } from 'react';
import Singleplayer from './singlePlayers/Singleplayer';
const FootBoller = () => {
  const [players,setPlayers] = useState([])
  const[open,setOpen] = useState(false)


  useEffect(()=>{
    fetch('team.json')
     .then(res=>res.json())
     .then(data=>setPlayers(data))
  },[])

  const handleDataShow=()=>{
    console.log('click me')
    setOpen(true)
  }
  
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-4 mb-6' >
     {
       players.slice(0,open?9:6).map(player=> <Singleplayer
      key={player.id}
      player={player}></Singleplayer>)
     }
    {
      !open &&
      <button onClick={()=>handleDataShow(true)} className='bg-orange-400 hover:bg-red-700 px-4 py-2 w-28 rounded mx-auto'>See mor</button>
    }
    </div>
    </>
  );
};

export default FootBoller;