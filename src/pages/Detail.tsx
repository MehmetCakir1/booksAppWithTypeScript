import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getSingleBook } from '../features/booksSlice'

const Detail = () => {
  const {id}=useParams()
  const dispatch=useAppDispatch()

  const {book,loading}=useAppSelector(state=>state.books)
  console.log(book)
  

  useEffect(() => {
      dispatch(getSingleBook(id))
  }, [])


  return (
    <div>
      {
        loading ? (
          <h1>Loading...</h1>
        ):(
          <div>
            <h1 className='uppercase font-semibold text-2xl text-center p-3'> {book?.volumeInfo?.title}</h1>
            <img src={book?.volumeInfo.imageLinks.smallThumbnail} alt={book?.volumeInfo.title} 
            className="w-[250px] h-auto"
            />
            <p>{book?.volumeInfo.description}</p>
          </div>
          
          // <h1>mer</h1>
        )
      }
    </div>
  )
}

export default Detail