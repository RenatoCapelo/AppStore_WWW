import { applicationMasterCategory } from "./applicationMasterCategory.model";

export interface applicationCategory{
  id:number,
  name: string,
  masterCategory: applicationMasterCategory
}
