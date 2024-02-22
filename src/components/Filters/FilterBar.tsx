import { useEffect, useRef, useState } from "react"

import CategoriesList from "@/data/categories.json"
import SearchHook from "@/hooks/SearchHook"


const FilterBar = () => {

    const categoriesList: any[] = CategoriesList
    const { searchText, setSearchText } = SearchHook();

    return (
        <div className="mb-8 flex gap-3 md:gap-6">
            <div className="flex gap-3 md:gap-6 overflow-hidden">
                {categoriesList.map((category) => (
                    <button
                        key={category.value}
                        onClick={(e) => setSearchText(`subject:${category.value}`)}
                        className=" w-fit h-fit py-1 px-6 text-sm text-gray-10 text-gray-200 colorLight rounded-lg whitespace-nowrap overflow-hiddwen tracking-wide"
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterBar