import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveInCity, makeStudentActive} from "./03";

let student :StudentType;
beforeEach(()=>{
   student={
      id: 1,
      "name": "Dima",
      age: 31,
      isActive: false,
      adress: {
         streetTitle: "Surganova 2",
         city: {
            title: "Minsk",
            countryTitle: "Belarus"
         }
      },
      tecnologies: [
         {id: 1, title: "HTML"},
         {id: 2, title: "CSS"},
         {id: 3, title: "REACT"}
      ]
   }
})

test.skip ("new tech skill should be added to student", ()=>{
   expect(student.tecnologies.length).toBe(3);

   addSkill(student,"JS");
   expect(student.tecnologies.length).toBe(4);
   expect(student.tecnologies[3].title).toBe("JS");
   expect(student.tecnologies[3].title).toBeDefined();
})

test.skip ("student is active", ()=>{
   expect(student.isActive).toBe(false);

   makeStudentActive(student);

   expect(student.isActive).toBe(true);
})

test.skip ("does student live in the Minsk?", ()=>{

   let result1 = doesStudentLiveInCity(student,"Moscow");
   let result2 = doesStudentLiveInCity(student,"Minsk");


   expect(result1).toBe(false);
   expect(result2).toBe(true);

})