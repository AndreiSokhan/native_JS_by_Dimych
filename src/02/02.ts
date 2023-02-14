type LocalCityType = {
   title: string
   countryTitle: string
}
type AddressType = {
   streetTitle: string
   city: LocalCityType
}
type TechType = {
   id: number
   title: string
}
type StudentsType = {
   id: number
   name: string
   age: number
   isActive: boolean
   adress: AddressType
   tecnologies: Array<TechType>
}


const student: StudentsType = {
   id: 1,
   "name": "Dima",
   age: 31,
   isActive: true,
   adress: {
      streetTitle: "Surganova 2",
      city: {
         title: "Misnk",
         countryTitle: "Belarus"
      }
   },
   tecnologies: [
      {id: 1, title: "HTML"},
      {id: 2, title: "JS"},
      {id: 3, title: "REACT"}
   ]
}

console.log(student.age)
console.log(student.name)
console.log(student.adress.city.title)
console.log(student.tecnologies[2].title)
