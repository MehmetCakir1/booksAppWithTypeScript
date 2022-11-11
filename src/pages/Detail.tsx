import {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getSingleBook } from '../features/booksSlice'
import { TiArrowBack } from "react-icons/ti";

const Detail = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const dispatch=useAppDispatch()

  const {book,loading}=useAppSelector(state=>state.books)

  useEffect(() => {
      dispatch(getSingleBook(id))
  }, [])

  return (
    <div className='container m-auto text-lg py-4'>
      {
        loading ? (
          <h1 className='text-2xl text-center font-semibold py-5'>LOADING...</h1>
        ):(
          <div>
            <h1 className='uppercase font-bold text-2xl text-center pt-10 pb-4'> {book?.volumeInfo?.title}</h1>
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} alt={book?.volumeInfo?.title} 
            className="w-[300px] h-[400px] block m-auto"
            />
            <p className='py-3 px-1'>{book?.volumeInfo?.description ? book?.volumeInfo?.description : "There is no information about book"}</p>
            <div> 
              <span className='font-bold'>Author(s):</span>
             
              {book?.volumeInfo?.authors?.map((item,index)=>{
              return(
                <p key={index}>{item}</p>
              )
            })}</div>
            <p>
            <span className='font-bold'>Page:</span> 
            {book?.volumeInfo?.pageCount}</p>
            <p>
            <span className='font-bold'>Published Date:</span> 
              {book?.volumeInfo?.publishedDate}</p>
            <p>
            <span className='font-bold'>Publisher:</span> 
              {book?.volumeInfo?.publisher}</p>
          </div>
        )
      }
      <button className='text-pink-500 text-5xl absolute left-5 top-5'
      onClick={()=>navigate("/")}
      ><TiArrowBack/></button>
    </div>
  )
}

export default Detail