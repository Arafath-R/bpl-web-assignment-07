import userImg from '../../assets/user1.png'
import { IoFlagSharp } from "react-icons/io5";
const Player = ({ player, selectedPlayer }) => {
    return (
        <div className="border border-[#1313131a] rounded-2xl p-6 space-y-4 my-6 md:my-0">
            <div className="md:w-90 md:h-60 object-fill overflow-hidden rounded-2xl"><img className='w-full h-full object-cover scale-100' src={player.image} alt="" /></div>
            <div className='text-xl font-semibold flex gap-3'><img src={userImg} alt="" /><h3>{player.name}</h3></div>
            <div className='flex justify-between items-center border-b-2 border-[#1313131a] pb-4'>
                <p className='flex text-gray-400 gap-3'><span className='text-xl'><IoFlagSharp /></span>{player.country}</p>
                <div className='bg-[#1313131a] p-2 rounded-lg'>
                    {player.role}
                </div>
            </div>
            <p className='font-bold'>Rating</p>
            <div className="flex justify-between items-center">
                <p className='font-semibold'>{player.battingType}</p>
                <p className='text-gray-500'>{player.bowlingType}</p></div>
            <div className="flex justify-between items-center">
                <p className='font-semibold'>Price: <span>{player.biddingPrice}</span></p>
                <button onClick={() => { selectedPlayer(player) }} className='btn border-[#e5e5e5] rounded-lg'>Choose Player</button></div>
        </div>
    );
};

export default Player;