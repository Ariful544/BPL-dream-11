
const AvailablePlayer = ({handleIsActive,isActive,choosePlayer}) => {
    return (
        <div className="flex justify-between items-center mt-12">
            <div></div>
            <div className="">
                <button onClick={()=>handleIsActive("Available")} className={`${isActive ? "btn btn-outline rounded-r-none border-r-0 font-bold text-neutral-900 bg-[#E7FE29]" :"btn btn-outline rounded-r-none border-r-0 font-bold text-neutral-900"}`}>Available</button>
                <button onClick={()=>handleIsActive("Selected")} className={`${isActive ?"btn btn-outline rounded-l-none border-l-0" : "btn btn-outline rounded-l-none border-l-0 bg-[#E7FE29]" }`}>Selected (<span>{choosePlayer.length}</span>)</button>
            </div>
        </div>
    );
};

export default AvailablePlayer;