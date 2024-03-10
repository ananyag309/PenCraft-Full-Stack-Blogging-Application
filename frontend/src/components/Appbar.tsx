import { Link } from "react-router-dom";
// import { Avatar } from "./BlogCard";
export const Appbar = () => {
  return (
    <Link to={"/blogs"}  >
      <div className="flex justify-between border-b p-3 m-1">
        <div className="font-bold text-lg">PenCraft</div>
        {/* search bar */}
        <div className='max-w-md mx-auto '>
       <div className="relative flex items-center w-full h-8 rounded-xl  bg-slate-100 overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-slate-100"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>
    
        <div className="flex  justify-center gap-5">
          <Button/>
          {/* <Avatar name="Akshit" /> */}
        </div>
      </div>
    </Link>
  );
};
export function Button()  {
  return <Link to="/publish">
  <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-xl text-xs px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
    Create New Blog
  </button>
</Link>
}