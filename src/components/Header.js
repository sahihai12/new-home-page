import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import logo from '../assets/images/logo.png';
import menu from '../assets/images/menu.png';
import profile from '../assets/images/profile.png';
import DynamicIcon from './DynamicIcon';
import { IoMdClose } from "react-icons/io";

const Header = () => (
  <header className="container mx-auto">
  <div className="nav-wrapper flex items-center justify-between py-2 gap-4">
    
    <nav className="nav-sidebar relative">
      <input className="hidden" type="checkbox" id="menuToggle" />
      <label className="menu-btn cursor-pointer" htmlFor="menuToggle">
        <Image alt="menu-img" src={menu} width={32} height={32} className="max-w-[26px] h-[26px]" />
      </label>

      <div className="nav-container fixed top-0 right-0 w-[280px] h-full bg-white shadow-lg hidden overflow-y-auto z-10">
        <label className="menu-btn absolute top-5 right-5 cursor-pointer text-gray-500 text-lg" htmlFor="menuToggle">
          <IoMdClose size={16} />
        </label>
        <ul className="nav-tabs mt-8 w-full">
          <li className="nav-tab border-b border-gray-200 py-3 px-5 text-gray-700">
            <Link href="https://sahihai12.github.io/portfolio/">Portfolio</Link>
          </li>
          <li className="nav-tab border-b border-gray-200 py-3 px-5 text-gray-700">
            <Link href="https://github.com/sahihai12">Github</Link>
          </li>
          <li className="nav-tab py-3 px-5 text-gray-700">
            <Link href="https://tech-stack-sahihai12.netlify.app/">My Website</Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className="logo-container flex-1">
      <Image alt="logo-img" src={logo} width={112} height={32} />
    </div>

    <nav className="main-menu flex-1">
      <ul className="nav-wrap flex items-center justify-center gap-6">
        <li className="nav-tab active flex items-center gap-2 text-gray-700 hover:text-primary transition-all duration-300">
          <DynamicIcon name="FiHome" size={24} />
          <Link href="/">Home</Link>
        </li>
        <li className="nav-tab flex items-center gap-2 text-gray-700 hover:text-primary transition-all duration-300">
          <DynamicIcon name="FiHeart" size={24} />
          <Link href="/">Wishlist</Link>
        </li>
        <li className="nav-tab flex items-center gap-2 text-gray-700 hover:text-primary transition-all duration-300">
          <DynamicIcon name="FiShoppingCart" size={24} />
          <Link href="/">Cart</Link>
        </li>
        <li className="nav-tab flex items-center gap-2 text-gray-700 hover:text-primary transition-all duration-300">
          <DynamicIcon name="FiSearch" size={24} />
          <Link href="/">Search</Link>
        </li>
        <li className="nav-tab flex items-center gap-2 text-gray-700 hover:text-primary transition-all duration-300">
          <DynamicIcon name="FiSettings" size={24} />
          <Link href="/">Setting</Link>
        </li>
      </ul>
    </nav>

    <div className="profile">
      <Image alt="profile-img" src={profile} width={40} height={40} className="rounded-full" />
    </div>
  </div>

  <SearchBar />
  </header>


);

export default Header;
