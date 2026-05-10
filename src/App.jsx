import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import { Suspense, useState } from "react"
import AvailablePlayers from "./components/available_players/AvailablePlayers";
import SelectedPlayers from "./components/selected_players/SelectedPlayers";
import { toast, ToastContainer } from 'react-toastify';
import Footer from "./components/footer/Footer";

const fetchPlayers = async () => {
  const res = await fetch('./players.json');
  return res.json();
}

const playersPromise = fetchPlayers();

function App() {
  const [coin, setCoin] = useState(0);
  const [playersSelected, setPlayersSelected] = useState([]);
  const [display, setDisplay] = useState(true);

  const addCoin = () => {
    const addedCoin = coin + 5000000;
    setCoin(addedCoin);
  }

  const selectedPlayer = (player) => {
    if (playersSelected.includes(player)) {
      toast('Already Selected')
    }
    else if (playersSelected.length >= 6) {
      toast('You can not choose anymore. Your selected players layout is full.')
    }
    else if (player.biddingPrice < coin) {
      const newPlayer = [...playersSelected, player];
      setPlayersSelected(newPlayer);
      setCoin(coin - player.biddingPrice);
    }
    else {
      toast('Get the free credit.');
    }
  }


  const removePlayer = (id, price) => {
    const remainingPlayer = playersSelected.filter(playerSelected => playerSelected.playerId !== id);
    setPlayersSelected(remainingPlayer);
    setCoin(coin + price);
  }

  return (
    <>
      <Navbar coin={coin}></Navbar >
      <Hero addCoin={addCoin}></Hero>
      <div className="max-w-7xl mx-auto mt-16 flex justify-between items-center sticky top-24 z-21 bg-white/80 px-4 md:px-0">
        <h2 className="text-2xl font-bold hidden md:block">{display ? "Available Players" : "Selected Players"}</h2>
        <div>
          <button onClick={() => { setDisplay(true) }} className={`border border-[#1313131a] rounded-l-xl py-3 px-4 ${display ? "bg-[#d4ff00] font-bold" : ""}`}>Available</button>
          <button onClick={() => { setDisplay(false) }} className={`border border-[#1313131a] rounded-r-xl py-3 px-4 ${display ? "" : "bg-[#d4ff00] font-bold"}`}>Selected(<span>{playersSelected.length}/6</span>)</button>
        </div>
      </div>
      <div className="mb-64">
        {display ? <Suspense fallback={<div className="text-5xl flex justify-center"><span className="loading loading-infinity loading-xl"></span></div>}>
          <AvailablePlayers playersPromise={playersPromise} selectedPlayer={selectedPlayer}></AvailablePlayers>
        </Suspense> :
          <SelectedPlayers playersSelected={playersSelected} removePlayer={removePlayer} setDisplay={setDisplay}></SelectedPlayers>}
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
