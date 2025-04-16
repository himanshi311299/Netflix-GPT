const VideoTitle = ({ title, overview }) => {
    return (
        <div className="z-10 w-screen aspect-video absolute pt-[16%] text-white px-12 bg-gradient-to-tr from-black">
            <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
            <p className="hidden md:block md:py-6 py-0 text-md w-1/4">{overview}</p>
            <button className="bg-white text-black text-lg font-bold md:p-4 p-2 px-6 md:px-12 md:my-0 my-6 rounded-md ">▶ Play</button>
            <button className="hidden md:inline-block mx-2 bg-gray-700 text-white font-bold text-lg p-4 px-12 rounded-md">More Info</button>
        </div>
    )
};

export default VideoTitle;