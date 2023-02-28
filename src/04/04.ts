//filter
const ages = [18, 20, 22, 1, 100, 90, 41]
const predicate = (age: number) => {               //predicate - это функция которая возвращает true или false
   return age > 91;
}

const oldAges = [100]

type CourseType = {
   title: string
   price: number
}

const courses = [                               //стоит выбрать только те курсы которые дешевле 160$
   {title: "CSS", price: 110},
   {title: "JS", price: 200},
   {title: "REACT", price: 150}
]

const chipPredecat = (course: CourseType) => {
   return course.price < 160;
}

const chipCourses =[
   {title: "CSS", price: 110},
   {title: "REACT", price: 150}
];

