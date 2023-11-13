export default function Banner() {
    return (
        <div className="relative h-80 flex flex-col justify-center items-center bg-[url('/images/banner.jpg')] bg-no-repeat bg-cover">
            <div className="absolute h-80 w-full"></div>
            <div className="z-10 text-white text-center	">
                {/* <h1>특별한 할인! 지금 구매하세요!</h1>
                <p>기간 한정, 놓치지 마세요.</p> */}
                {/* <button className="border border-0 bg-indigo-600 py-2 px-4 mt-6 rounded-lg"><a href="#">Contact Me!!</a></button> */}
            </div>
        </div>
    )
}