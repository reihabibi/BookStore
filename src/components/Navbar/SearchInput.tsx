
import searchHook from "@/hooks/searchHook"

function SearchInput({isSearchOpen} : any) {
  
  const { searchText, setSearchText } = searchHook();

  return (
    <div>
      <input
      type="search"
        value={searchText}
        placeholder="Search for your favorite book"
        onChange={(e) => setSearchText(e.target.value)}
        className={
          "h-9 bg-transparent px-2 md:px-6 border-b border-transparent text-white focus:outline-none animation duration-500 ease-in-out " +
          (isSearchOpen ? "md:w-96  border-white " : " w-0")
        }
      />
    </div>
  );
}

export default SearchInput;