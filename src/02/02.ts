export type StudentType = {
   id: number
   name: string
   age: number
   isActive: boolean
   address: AdressPropsType
   technologies: Array<TechPropsType>
}

type AdressPropsType = {
   streetTitle: string
   city: CityPropsType
}

type CityPropsType = {
   title: string
   countryTitle: string
}

type TechPropsType = {
   id: number
   title: string
}

const school = {
   name: "IT-incubator",
   open: "true",
   mentors: ["Dima", "Victor", "Igor"],
}

console.log(school.mentors[0]);

export const student: StudentType = {
   id: 1,
   name: "Dima",
   age: 33,
   isActive: false,
   address: {
      streetTitle: "Surganova 2",
      city: {
         title: "Minsk",
         countryTitle: "Belarus",
      }
   },
   technologies: [
      {id: 1, title: "HTML"},
      {id: 2, title: "CSS"},
      {id: 3, title: "React"}
   ]
}

// console.log(students.name)
// console.log(students.adress.city.title)
// console.log(students.technologies[2].title)
