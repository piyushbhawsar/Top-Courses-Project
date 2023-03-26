import React from "react"
import { filterData } from "../Data"
import Cards from "../components/Cards"

export default function Filter(){
    const [category , setCategory] = React.useState(filterData[0].title )
    console.log(`Category: ${category}`) ;
    function filterHandler(title) {
        setCategory(title)
    }

    const filterButtons = filterData.map(val => (
        <button 
            className={`
                text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 transition-all duration-300
                    ${ category===val.title ?
                       "border-4" :
                       "border-1"
                }`}
            key={val.id} 
            onClick={() => filterHandler(val.title)}
            >
                {val.title}
        </button>
        ))
    return (
        <div>
            <div className="flex p-[10px] gap-[3rem] font-bold">
            {filterButtons}
            </div>
            <Cards category={category}/>
        </div>

    )
}