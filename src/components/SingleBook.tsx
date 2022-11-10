import { useNavigate } from "react-router-dom";
import { Item } from "../types/interfaces"

const SingleBook = ({book}:any) => {
const {id,volumeInfo,title}=book;
const navigate=useNavigate()
  return (
    <div className="w-[200px] flex flex-col justify-center items-center cursor-pointer"
    onClick={()=>navigate(`/detail/${id}`)}
    >
       <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} className="w-[150px] h-[200px]" /> 
       <p className=" p-2 truncate w-full text-center">{volumeInfo.title}</p>
    </div>
  )
}

export default SingleBook