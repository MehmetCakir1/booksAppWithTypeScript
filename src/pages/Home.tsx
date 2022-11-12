import { useAppDispatch, useAppSelector } from "../app/hooks";
import SearchForm from "../components/SearchForm";
import SingleBook from "../components/SingleBook";
import { next, previous } from "../features/booksSlice";

const Home = () => {
  const { books, loading,offset } = useAppSelector((state) => state.books);
  const dispatch=useAppDispatch()


  return (
    <>
      <SearchForm />
      <div className="container m-auto flex flex-wrap items-center justify-center gap-6">
        {loading ? (
          <h1 className="text-2xl text-center font-semibold py-5">
            LOADING...
          </h1>
        ) : (
          books?.map((book) => {
            return <SingleBook key={book.id} book={book} />;
          })
        )}
      </div>
      {
        !loading && (
          <div className="flex justify-center items-center gap-4 p-5 font-bold text-slate-300">
          <button className="bg-purple-500 w-[7rem] py-1"
          onClick={()=>dispatch(previous(offset))}
          >PREVIOUS</button>
          <button className="bg-purple-500 w-[7rem] py-1"
          onClick={()=>dispatch(next(offset))}
          >NEXT</button>
        </div>
        )
      }
    </>
  );
};

export default Home;
