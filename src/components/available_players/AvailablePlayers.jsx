import { use } from "react";
import Player from "../player/Player";


const AvailablePlayers = ({ playersPromise, selectedPlayer }) => {
    const players = use(playersPromise);

    return (
        <div className="max-w-7xl mx-auto my-10 md:grid grid-cols-3 gap-6 px-4 md:px-0">
            {
                players.map(player => <Player key={player.playerId} player={player} selectedPlayer={selectedPlayer}></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;