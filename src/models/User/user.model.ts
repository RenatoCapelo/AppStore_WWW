export interface User{
  guid: string,
    email: string,
    photoGuid: string,
    name: string,
    dob: string,
    gender:{
      id: number,
      description: string
    }
    developer?:{
      devGuid:string,
      devName:string,
      secEmail?:string,
      phoneNum?:string,
      createdOn:string
    },
    role:string
}
