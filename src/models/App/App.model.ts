import { applicationCategory } from "../AppCategory/applicationCategory.model"
import { DeveloperToGet } from "../Developer/DeveloperToGet.model"

export interface App{
  applicationCategory: applicationCategory
  applicationGuid:string
  applicationSize:number
  description: string
  dateOfPublish:Date,
  dateOfUpdate:Date,
  developer: DeveloperToGet,
  icon: string | null,
  minsdkversion:number,
  packageName: string,
  ratingAverage: number,
  title: string,
  versionCode: number,
  versionName: string
}
