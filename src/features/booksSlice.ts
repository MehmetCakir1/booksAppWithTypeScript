import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IState,Item,RootObject } from "../types/interfaces"


const initialState: IState = {
    books: [],
    loading: false,
    error:"",
    book:<Item>{},
    offset:0
  }

export const getBooks = createAsyncThunk(
    'books/getBooks', async ({bookName,offset}:{bookName:string,offset:number})=>{
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=20&startIndex=${offset}`)
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
      next:(state,action : PayloadAction<number>)=>{
            state.offset+=20
    },
    previous:(state,action : PayloadAction<number>)=>{
        if(state.offset>0){
            state.offset-=20
        }
    },

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
          state.error="Something went wrong"
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
          state.error="Something went wrong"
        })
    }
})

export const {next,previous}=booksSlice.actions

export default booksSlice.reducer