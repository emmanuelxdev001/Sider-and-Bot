import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className='bg-black w-full h-[40px]'>header</div>
      <div className='bg-green-400 w-full h-[70px] flex justify-around items-center text-white'>
      <div className="h-[40px] w-[120px]">Logo</div>
        <div>
        <input type="text"
        placeholder="Search" 
        className="h-[38px] w-[280px] py-2 px-3 rounded-md border-spacing-0.5 shadow-md"/>
        <BsSearch />
        </div>
        <div>
          <button className="border-spacing-1 shadow-sm rounded-sm h-[48px] w-[150px] font-semibold mr-4 bg-slate-600">Sign Up</button>
          <button className="bg-blue-400 border shadow-sm rounded-sm h-[48px] w-[130px] font-semibold">Login</button>
        </div>
      </div>

      
    </div>
  )
}

export default Header;
