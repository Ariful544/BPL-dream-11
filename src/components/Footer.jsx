import Subscribe from '../components/Subscribe';
import footerLogo from '../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className=" min-h-[700px] mt-20 max-w-screen-2xl bg-slate-900">
            {/* subscribe section */}
            <Subscribe />
            <div className='flex text-white pt-[300px] flex-col justify-center h-full items-center max-w-screen-xl mx-auto'>
                <img src={footerLogo} alt="" />
                <div className='grid gap-6 text-center md:text-left grid-cols-1 md:grid-cols-3 mt-12 pb-16 border-b'>
                    <div>
                        <p className='text-lg font-semibold'>About Us</p>
                        <p className='text-white/60'>We are a passionate team <br></br> dedicated to providing the best <br></br> services to our customers.</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>Quick Links</p>
                        <ul className='ml-6'>
                            <li className=' md:list-disc list-none'>
                                <a className='text-white/60' href="">Home</a>
                            </li>
                            <li className=' md:list-disc list-none'>
                                <a className='text-white/60' href="">Fixture</a>
                            </li>
                            <li className=' md:list-disc list-none'>
                                <a className='text-white/60' href="">Teams</a>
                            </li>
                            <li className=' md:list-disc list-none'>
                                <a className='text-white/60' href="">Schedules</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>Subscribe</p>
                        <p className='text-white/60'>Subscribe to our newsletter for the <br></br> latest updates.</p>
                        <div className='flex border-1 rounded-xl mt-4'>
                            <label className="input input-bordered flex rounded-r-none border-0   text-black items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" />
                               
                            </label>
                            <button className='btn rounded-l-none border-0 font-bold h-full text-black bg-gradient-to-l from-purple-400 to-yellow-400 '>Subscribe</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='text-center text-white py-6'>
                <p className='text-white/60'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;