import React from "react"
import Card from "./Card"
import { apiUrl } from "../Data"
import Spinner from "./Spinner"
import { toast } from "react-toastify"

export default function Cards({ category }) {

    const [courses,setCourses] = React.useState()
    const [loading,setLoading] = React.useState(true)
    React.useEffect(()=>{
        const fetchData = async() => {
            setLoading(true)
            try {
                const response = await fetch(apiUrl)
                const data = await response.json()
                setCourses(data.data)
                toast.success("api fetched")
            }
            catch(error){
                toast.error("fail hoagayaa re bava ")
            }
            setLoading(false)
        } 
        fetchData()
    },[])
    
    function getAllCourses() {
        //if All-filter 
        if(category ==="All") {
            const allCourses = []
                // !loading && 
            Object.values(courses).forEach(coursesCategory => {
                coursesCategory.forEach(courseObj => {
                    allCourses.push(courseObj)
                })
            })
            return allCourses
        }
        //else specific category ka hi data 
        else { 
            return courses[category]
        }
    }
                
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                loading ? 
                (<Spinner />) :
                (
                    getAllCourses().map(courseObj=> {
                        return <Card 
                            key={courseObj.id}
                            courseObj={courseObj}
                        />
                    })
                )
            }
        </div>
    )
}