import Card from '../components/Card';

// eslint-disable-next-line react/prop-types
const Cards = ({ players, handleChoosePlayer }) => {

    return (
        <>
             <h1 className="mt-4 text-[28px] font-bold text-neutral-900">Available Players</h1>
            <div className=' mt-10 gap-6 grid grid-cols-1  md:grid-cols-3'>
                {players.map(player => <Card handleChoosePlayer={handleChoosePlayer} key={player.playerId} player={player} />)}
            </div>
        </>
    );
};

export default Cards;