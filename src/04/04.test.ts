test("should take old men older then 90", () => {
   const ages = [18, 20, 22, 1, 100, 90, 41];

   // const predicate = (age: number) => {
   //    return age > 91;
   // }
   //или возможно более короткая запись этой же предикативной ф-и
   const predicate = (age: number) => age > 90;

   // const oldAges = ages.filter(predicate);

   //или же предикативная ф-я может быть засунута напрямую в filter
   const oldAges = (ages.filter(age => age > 90))


   expect(oldAges.length).toBe(1);
   expect(oldAges[0]).toBe(100);

})

test("should take courses chipper then 160$", () => {
   const courses = [
      {title: "CSS", price: 110},
      {title: "JS", price: 200},
      {title: "REACT", price: 150}
   ]
   const chipPredecat = (course: CourseType) => {
      return course.price < 160;
   }

   // const chipCourses = courses.filter(chipPredecat);

   //короткая запись и для этой ф-и
   const chipCourses = courses.filter(course => course.price < 160);

   expect(chipCourses.length).toBe(2);
   expect(chipCourses[1].title).toBe("REACT");
})

test("get only completed tasks", () => {
   const tasks = [
      {id: 1, title: 'Bread', isDone: false},
      {id: 2, title: 'Milk', isDone: true},
      {id: 3, title: 'Sugar', isDone: false},
      {id: 4, title: 'Solt', isDone: true},
   ]
   const completedTasks = tasks.filter(task => task.isDone);

   expect(completedTasks.length).toBe(2);
   expect(completedTasks[0].id).toBe(2);
   expect(completedTasks[1].id).toBe(4);
})

test("get only uncompleted tasks", () => {
   const tasks = [
      {id: 1, title: 'Bread', isDone: false},
      {id: 2, title: 'Milk', isDone: true},
      {id: 3, title: 'Sugar', isDone: false},
      {id: 4, title: 'Solt', isDone: true},
   ]
   const unCompletedTasks = tasks.filter(task => !task.isDone);
   //или такая вариация записи (не юзабельна в продакшене)
   // const unCompletedTasks = tasks.filter(task => task.isDone===false);

   expect(unCompletedTasks.length).toBe(2);
   expect(unCompletedTasks[0].id).toBe(1);
   expect(unCompletedTasks[1].id).toBe(3);
})