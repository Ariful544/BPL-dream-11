/* eslint-disable react/prop-types */
import logo from '../assets/logo.png';
const Header = ({freeCredit}) => {
    return (
        <div className='max-w-screen-2xl backdrop-blur-md backdrop-sepia-0 bg-white/50 items-center sticky top-0 z-50'>
        <div className="min-h-20 mt-10 max-w-screen-xl mx-auto px-4 flex justify-between ">
           <div>
                <img src={logo} alt="" />
           </div>
           <div className='flex  items-center gap-4'>
             <ul className='md:flex gap-12 hidden'>
                <li>
                    <a className='text-neutral-900/70' href="">Home</a>
                </li>
                <li>
                    <a className='text-neutral-900/70' href="">Fixture</a>
                </li>
                <li>
                    <a className='text-neutral-900/70' href="">Teams</a>
                </li>
                <li>
                    <a className='text-neutral-900/70' href="">Schedules</a>
                </li>
             </ul>
             <button className='btn btn-outline border-neutral-300 border-2 hover:bg-slate-700 text-neutral-900 font-semibold'><span>${freeCredit }</span>Coin <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="" /></button>
           </div>
        </div>
        </div>
    );
};

export default Header;