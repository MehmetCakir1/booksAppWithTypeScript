import { useNavigate } from "react-router-dom";
import { Item } from "../types/interfaces"

const SingleBook = ({book}:any) => {
const {id,volumeInfo,title}=book;
const navigate=useNavigate()
  return (
    <div className="w-[200px] flex flex-col justify-center items-center cursor-pointer border border-slate-300 p-1"
    onClick={()=>navigate(`/detail/${id}`)}
    >
       <img src={volumeInfo.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.smallThumbnail : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"} alt={volumeInfo.title} className="w-[150px] h-[200px]" /> 
       <p className=" p-2 truncate w-full text-center">{volumeInfo.title}</p>
    </div>
  )
}

export default SingleBook