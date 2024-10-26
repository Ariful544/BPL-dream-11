
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AvailablePlayer from './components/AvailablePlayer';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Selected from './components/Selected';

function App() {
 const [players, setPlayers] = useState([]);
 const [freeCredit, setFreeCredit] = useState(0);
 const [choosePlayer, setChoosePlayer] = useState([]);
 const [isActive, setIsActive] = useState(true);
 const handleIsActive = (status)=>{
  if ( status === "Available" ){
    setIsActive(true);
  }
  else{
    setIsActive(false);
  }
 }
 useEffect(()=>{
  fetch('/players.json')
  .then(res => res.json())
  .then(data => setPlayers(data.players))
 },[])

 function handleFreeCredit(){
    setFreeCredit(freeCredit + 6000000);
    toast.success("Credit added to your account successfully");
 }
 function handleChoosePlayer(player) {
     const newChoosePlayer = [...choosePlayer, player];
     const price = player.biddingPrice;
      const newCredit = parseInt(price);
      if(newCredit > freeCredit) {
        toast.error("Not enough money to buy this player.Claim some credit");
        return;
      }
      if(choosePlayer.length > 5){
        toast.error("You have selected maximum players");
        return;
      }
     const isExit = choosePlayer.find(previousPlayer => previousPlayer.playerId === player.playerId);
     if (isExit){
      toast.error(`Sorry!! ${player.name} already is in your squad`);
     }else{
         setChoosePlayer(newChoosePlayer);
          setFreeCredit(freeCredit - newCredit);
          toast.success(`Congrates!! ${player.name}  is in your squad`);
     }   
 }
 
  return (
    <>
    {/* React toastify */}
    <ToastContainer position="top-center" autoClose={3000} />
    {/* Header section */}
    <Header freeCredit={freeCredit}/>
    <div className=" relative mb-96 max-w-screen-xl mx-auto px-4">
     {/* Hero section */}
     <Hero handleFreeCredit={handleFreeCredit}/>
     {/* Available section */}
     <AvailablePlayer choosePlayer={choosePlayer} isActive={isActive} handleIsActive={handleIsActive}/>
     {/* Cards section */}
     {isActive? <Cards handleChoosePlayer={handleChoosePlayer} players={players}/> :  <Selected handleIsActive={handleIsActive} setChoosePlayer={setChoosePlayer} choosePlayer={choosePlayer}/> }
    
     </div>
     {/* footer section */}
     <Footer/>
    </>
  )
}

export default App
