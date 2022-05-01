import { App } from "./App.model";

export interface AppToGet{
  pages:number
  currentPage:number
  count: number
  results: App[]
}
