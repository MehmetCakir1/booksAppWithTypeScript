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
          {book?.volumeInfo?.title}
        )
      }
    </div>
  )
}

export default Detail