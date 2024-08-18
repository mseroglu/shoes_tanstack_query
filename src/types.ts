interface Shoe{
   id:string,
   name:string,
   picture:string[],
   description:string,
   isNew: boolean,
   size:number[],
   color:string[],
   gender:"man" | "woman",
   price:number,
   discount?:number
}