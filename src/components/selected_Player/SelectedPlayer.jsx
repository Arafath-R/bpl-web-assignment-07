import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({ playerSelected, removePlayer }) => {
    return (
        <div className="border border-[#1313131a] flex justify-between p-6 rounded-2xl my-5">
            <div className="flex gap-4 items-center">
                <img className="w-30 h-30 rounded-2xl object-cover" src={playerSelected.image} alt="" />
                <div>
                    <h2 className="text-2xl font-semibold">{playerSelected.name}</h2>
                    <p className="text-gray-500 pt-4">{playerSelected.battingType}</p>
                </div>
            </div>
            <button onClick={() => { removePlayer(playerSelected.playerId, playerSelected.biddingPrice) }} className="text-3xl text-red-500"><RiDeleteBin6Line /></button>
        </div>
    );
};

export default SelectedPlayer;