type LocalCityType = {
    title: string,
    countryTitle: string
}
type AddressType = {
    street: string,
    city: LocalCityType
}
type TechType = {
    id: number,
    title: string
}
type StudentType = {
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechType>
}

const student: StudentType = {
    name: "Andrey",
    age: 29,
    isActive: true,
    address: {
        street: "Surganova_2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "CSS"

        },
        {
            id: 2,
            title: "JS"

        },
        {
            id: 3,
            title: "React"

        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.countryTitle)
console.log(student.technologies[2].title)
