export default function SearchBar() {
    return <>
         <div className="pt-2 relative mx-auto text-gray-600">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            search
        </button>
      </div>
    </>
}