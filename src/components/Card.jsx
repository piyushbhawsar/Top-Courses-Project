import React from "react";
import { FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

export default function Card({ courseObj }) {
    const [likedCourses , setLikedCourses] = React.useState([])
    function likeHandler(){
        if(likedCourses.includes(courseObj.id)){
            setLikedCourses(prevState => prevState.filter(currId => currId!==courseObj.id))
            toast.warning("Like Removed")
        }
        else {
            if(courseObj.length===0){
                setLikedCourses([courseObj.id])
            }
            else {
                setLikedCourses(prevState => ([
                    ...prevState,
                    courseObj.id
                ]))
                toast.success("Like Added")
            }
        }
    }
    return (
        <div className="w-[300px] bg-slate-800 bg-opacity-80 rounded-md overflow-hidden">
            <div className='relative'>
                <img src={courseObj.image.url} width="300em"/>
                <button 
                    className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-18px] grid place-items-center'
                    onClick={likeHandler}
                >   {
                        likedCourses.includes(courseObj.id) ?
                            <FcLike fontSize="2rem"/> :
                            <FcLikePlaceholder fontSize="2rem"/>
                    }
                </button>
            </div>
            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{courseObj.title}</p>
                <p className='mt-2 text-white'>
                    {
                        courseObj.description.length >100 ? 
                        (courseObj.description.substr(0,100)) + "..." :
                        (courseObj.description)
                    }
                </p>
            </div>
        </div>
    )
}