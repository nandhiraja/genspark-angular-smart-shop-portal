

export class ProfileModel{
    constructor(
          public id = 0,
          public username:string = "",
          public email:string = "",
          public firstName:string =  "",
          public lastName: string ="",
          public gender : string="",
          public image:string =""
    ){}
}