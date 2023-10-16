import {StudentType} from '../02/02';
import {CityType, GovernmentType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
   return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
   st.technologies.push({id: new Date().getTime(), title: skill})
}

export function makeStudentActive(s: StudentType) {
   s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
   return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: any, budget: number) => {
   building.budget += budget;
}

export const repairedHouse = (houseType: HouseType) => {
   houseType.repaired = true;
}

export const toFireStaff = (govBuilding: any, stuffCountToFire: number) => {
   govBuilding.staffCount -= stuffCountToFire;
}

export const toHairStaff = (govBuilding: GovernmentType, stuffCountToHire: number) => {
   govBuilding.staffCount += stuffCountToHire;
}
