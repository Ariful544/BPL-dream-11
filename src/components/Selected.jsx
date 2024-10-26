import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Selected = ({ choosePlayer,handleIsActive,setChoosePlayer}) => {
    function handleDelete(index){
        const newItems = choosePlayer.filter((item, i) => i !== index);
        setChoosePlayer(newItems);
        toast.warn("You have removed a player successfully");

    }
    
    return (
        <div>
            <h1 className="mt-4 text-[28px] font-bold text-neutral-900">Selected players ({choosePlayer.length}/6)</h1>
            <ul className="flex flex-col gap-4 my-4">
                {choosePlayer.map((player, index) => {
                    return (
                        <li className="flex rounded-xl justify-between items-center border-2 p-4" key={index}>
                            <div className="flex justify-center items-center gap-4">
                                <img className="w-20 h-20 object-cover rounded-full" src={player.image} alt="" />
                                <div>
                                    <p className="font-bold text-black text-xl">{player.name}</p>
                                    <p className="text-black/90 font-semibold">{player.role}</p>
                                    <p className="text-black/80 font-semibold"><span className="font-bold text-black">Price:</span> ${player.biddingPrice}</p>
                                </div>
                            </div>
                            <button onClick={()=>handleDelete(index)} className="btn bg-red-500 text-white hover:bg-red-700">Remove</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>handleIsActive("Available")} className="btn bg-[#E7FE29] font-bold">Add more players</button>
        </div>
    );
};

export default Selected;