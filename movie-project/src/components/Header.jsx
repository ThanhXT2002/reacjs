const Header = () =>{
    return  <div className=" p-4 bg-black flex items-center justify-between">
        <div className="flex item-center space-x-5">
            <h1 className="text-red-700 uppercase text-[40px] font-bold">FilmXT</h1>

            <ul className="flex items-center space-x-5">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
                <li><a href="#" className="text-white">About</a></li>
            </ul>
        </div>
        <form action="" method="get" className="flex item-center space-x-5">
            <input type="text" className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 p-1" placeholder="Search for something..." />
            <button className="p-2 text-white bg-red-500 rounded-sm">Search</button>
        </form>
        

    </div>
    
}

export default Header;