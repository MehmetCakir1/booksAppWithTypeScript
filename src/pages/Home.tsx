import {useState,useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import SingleBook from '../components/SingleBook'
import { getBooks } from '../features/booksSlice'
import { Item } from '../types/interfaces'

const Home = () => {
  const dispatch=useAppDispatch()
  const [bookName,setBookName]=useState<string>("crimeandpunishment")

  const {books,loading}=useAppSelector(state=>state.books)


  useEffect(() => {
    dispatch(getBooks(bookName))
  }, [])
  
// console.log("books",books);
// console.log("book",book);
  
  return (
    <div className='container m-auto flex flex-wrap items-center justify-center gap-6'>
    {
      loading ? (
        <h1>Loading..</h1>
      ):(
            books.map((book)=>{
          return(
            <SingleBook key={book.id} book={book}/>
          )
        })      
      )
    }
    </div>
  )
}

export default Home