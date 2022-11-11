import { useAppSelector } from '../app/hooks'
import SearchForm from '../components/SearchForm'
import SingleBook from '../components/SingleBook'

const Home = () => {
  const {books,loading}=useAppSelector(state=>state.books)

  
  return (
    <> 
    <SearchForm/>
    <div className='container m-auto flex flex-wrap items-center justify-center gap-6'>
    {
      loading ? (
        <h1 className='text-2xl text-center font-semibold py-5'>LOADING...</h1>
        ):(
            books.map((book)=>{
          return(
            <SingleBook key={book.id} book={book}/>
          )
        })      
      )
    }
    </div>
    </>

  )
}

export default Home