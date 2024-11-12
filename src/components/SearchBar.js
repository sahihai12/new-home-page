import DynamicIcon from "./DynamicIcon";

const SearchBar = () => {
    return (
        <div className="searchbox flex items-center justify-between px-4 py-2 shadow-md gap-2 mt- bg-white rounded-md">
            <DynamicIcon name="FiSearch" size={16} />
            <input type="text" placeholder="Search for products" className="flex-1 bg-transparent border-none outline-none" />
            <DynamicIcon name="FiMic" size={16} />
        </div>
    );
};

export default SearchBar;
