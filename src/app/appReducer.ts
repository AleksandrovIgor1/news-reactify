import { newsApi } from "@/entities/news/api/newsApi";
import { combineReducers } from "@reduxjs/toolkit";
import newsReucer from "@/entities/news/model/newsSlice";
import { categoriesApi } from "@/entities/categories/api/categoriesApi";
export const rootReducer = combineReducers({
  news: newsReucer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
