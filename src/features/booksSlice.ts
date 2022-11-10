import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IState,Item,RootObject } from "../types/interfaces"


const initialState: IState = {
    books: [],
    loading: false,
    error:"",
    book:<Item>{},
  }

export const getBooks = createAsyncThunk(
    'books/getBooks', async (book:string) => {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=20`)
            .then(res => {
                return res.json()
            })
    }
  )
export const getSingleBook = createAsyncThunk(
    'books/getSingleBook', async (id:any) => {
        return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => {
                return res.json()
            })
    }
  )

const booksSlice = createSlice({
    name:"books",
    initialState,
    reducers:{

    },
    extraReducers(builder:any){
        builder.addCase(getBooks.pending,(state:IState)=>{
          state.loading=true;
        })
        builder.addCase(getBooks.fulfilled,(state:IState,action:PayloadAction<RootObject>)=>{
          state.loading=false;
          state.books=action.payload.items;
        })
        builder.addCase(getBooks.rejected,(state:IState)=>{
          state.loading=true;
        })
        builder.addCase(getSingleBook.pending,(state:IState)=>{
          state.loading=true;
        })
        builder.addCase(getSingleBook.fulfilled,(state:IState,action:PayloadAction<Item>)=>{
          state.loading=false;
          state.book=action.payload;
        })
        builder.addCase(getSingleBook.rejected,(state:IState)=>{
          state.loading=true;
        })
    }
})

export default booksSlice.reducer