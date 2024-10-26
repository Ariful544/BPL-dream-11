import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({player,handleChoosePlayer}) => {
    return (
        <div>
            <div  className="card p-4 border-2 bg-base-100">
                <figure>
                    <img className="w-full h-[200px] object-cover rounded-xl"
                        src={player.image}
                        alt="" />
                </figure>
                <div className="flex gap-2 items-center mt-4">
                    <i className="fa-solid fa-user text-xl"></i>
                    <p className=" text-xl font-semibold text-black">{player.name}</p>
                </div>
                <div className="flex justify-between items-center mb-4 border-b-2 pb-3">
                    <div className="flex gap-2 my-2 items-center text-neutral/80">
                    <i className="fa-solid fa-flag"></i>
                    <p>{player.country}</p>
                    </div>
                    <button className="btn btn-sm">{player.role}</button>
                </div>
                <p className="font-bold text-black">Rating</p>
                <div className="flex justify-between my-2">
                    <p className="text-black font-semibold">{player.battingType}</p>
                    <p className=" text-neutral/80">{player.bowlingType}</p>
                </div>
                <div className="flex justify-between items-center my-2">
                    <p className="text-black font-semibold">Price: ${player.biddingPrice}</p>
                    <button onClick={()=>handleChoosePlayer(player)} className="btn btn-sm btn-outline hover:bg-[#E7FE29] hover:text-black text-neutral/90">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Card;