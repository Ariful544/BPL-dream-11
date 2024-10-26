
const Subscribe = () => {
    return (
        <div className="h-[385px] absolute mb-10 p-6 w-full md:w-[1260px] ml-0 md:ml-32 -mt-44 border-2 rounded-xl backdrop-blur-md backdrop-sepia-0 bg-white/30 ">
            <div className=" h-full rounded-xl  bg-gradient-to-tr to-yellow-300 from-purple-400 flex flex-col text-center justify-center items-center">
                <h3 className=" text-3xl font-bold">Subscribe to our Newsletter</h3>
                <p className="my-4 text-neutral/80">Get the latest updates and news right in your inbox!</p>
                <div className="flex flex-col md:flex-row gap-4">
                    <label className="input flex-1 input-bordered flex items-center gap-2">
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
                        <input type="text" className="grow py-2 md:py-0 " placeholder="Enter your email" />
                    </label>
                    <button className="btn btn-sm md:btn font-bold btn-outline text-black bg-gradient-to-r from-purple-300 to-yellow-500">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;