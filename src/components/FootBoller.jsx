import { useEffect, useState } from 'react';
import Singleplayer from './singlePlayers/Singleplayer';
const FootBoller = () => {
  const [players,setPlayers] = useState([])


  useEffect(()=>{
    fetch('team.json')
     .then(res=>res.json())
     .then(data=>setPlayers(data))
  },[])
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-4' >
     {
      players.map(player=> <Singleplayer
      key={player.id}
      player={player}></Singleplayer>)
     }
    </div>
  );
};

export default FootBoller;