import {student, StudentType} from "../02/02";
import {GovernmentBuildingsType, HouseType} from "../02/02_02";


//чистая функция (отрабатывает и возвращает рузультат)
export const sum = (a: number, b: number) => {
   return a + b;
}


// () ООП функция (модифицирует данные. которые в нее пришли и ничего не возврвщает)
// const res = sum(2,3)
const res = sum(sum(1, 2), sum(1, 3))

export const addSkill = (student: StudentType, skill: string) => {
   student.tecnologies.push({
      id: new Date().getTime(),
      title: skill
   })
}

export function makeStudentActive(student: StudentType) {
   student.isActive = true;
}

export const doesStudentLiveInCity = (student: StudentType, cityName: string) => {
   return student.adress.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
   building.budget += budget;
}

export const reparirHouse = (houseType: HouseType) => {
   houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number)=>{
   building.staffCount -= staffCountToFire;
}