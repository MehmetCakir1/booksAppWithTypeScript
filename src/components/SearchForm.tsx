import {useState,useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getBooks } from '../features/booksSlice'

const SearchForm = () => {
    const [bookName,setBookName]=useState<string>("")
    const { offset } = useAppSelector((state) => state.books);
    const dispatch=useAppDispatch()
// eslint-disable-next-line
useEffect(() => {
  dispatch(getBooks({bookName,offset}))
}, [offset])


    const handleSearch=(e:any)=>{
        e.preventDefault()
        if(bookName){
          dispatch(getBooks({bookName,offset}))
        }
        // setBookName("")
    }
  return (
    <form 
    className='max-w-[40rem] m-auto text-center p-10'
    onSubmit={handleSearch}>
        <input 
        type="text"
        value={bookName}
        onChange={(e)=>setBookName(e.target.value)}
        className="border border-slate-400 w-8/12 p-1"
        placeholder='Please type book name here'
        />
        <button
        type='submit'
        className='bg-teal-500 w-3/12 sm:w-2/12 py-[5px] font-semibold'
        >SEARCH</button>
    </form>
  )
}

export default SearchForm