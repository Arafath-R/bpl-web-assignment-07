import SelectedPlayer from "../selected_Player/SelectedPlayer";


const SelectedPlayers = ({ playersSelected, removePlayer, setDisplay }) => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            {
                playersSelected.map(playerSelected => <SelectedPlayer key={playerSelected.playerId} playerSelected={playerSelected} removePlayer={removePlayer}></SelectedPlayer>)
            }
            <div className="inline-block p-px bg-[#d4ff00] rounded-2xl hover:bg-linear-to-r from-[#e879f9] via-[#fbbf24] to-[#fde047]">
                <div className="p-1.5 bg-white rounded-2xl">
                    <button onClick={() => setDisplay(true)} className="bg-[#d4ff00] py-3.5 px-5 rounded-xl font-bold hover:bg-linear-to-r from-[#e879f9] via-[#fbbf24] to-[#fde047] hover:scale-95">
                        Add More Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayers;