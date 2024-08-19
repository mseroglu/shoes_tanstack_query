interface Shoe {
   id: string,
   name: string,
   picture: string[],
   description: string,
   isNew: boolean,
   size: string,
   color: string,
   gender: "man" | "woman",
   price: number,
   discount?: number
}

interface PropsSelected {
   selected: string[],
   setSelected: React.Dispatch<React.SetStateAction<string[]>>
}