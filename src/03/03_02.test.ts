import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairedHouse, toFireStaff, toHairStaff} from "./03";
import exp from "constants";

let city: CityType;

beforeEach(() => {
   city = {
      title: "New York",
      houses: [
         {id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
         {id: 2, buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
         {id: 3, buildedAt: 2020, repaired: false, address: {number: 101, street: {title: "Happy street"}}}
      ],
      govBuildings: [
         {id: 1, type: "HOSPITAL", budget: 200000, staffCount: 200, address: {street: {title: "Central str"}}},
         {id: 2, type: "FIRE-STATION", budget: 500000, staffCount: 1000, address: {street: {title: "South str"}}}
      ],
      citizenNum: 1000000
   }
})

// 01. создайте в отдельном файле функцию чтобы тесты проошли
test("Budget should be change for HOSPITAL", () => {
   addMoneyToBudget(city.govBuildings[0], 100000);
   expect(city.govBuildings[0].budget).toBe(300000)
})

test("Budget should be change for FIRE-STATION", () => {
   addMoneyToBudget(city.govBuildings[1], -100000);
   expect(city.govBuildings[1].budget).toBe(400000)
})

//01. доплнить тип HouseType (добавить порядковый id от 1 и по возрастанию)
//02. создать в том же файле еще одну ф-ю чтобы тесты прошли

test.skip("Houses should be destroyed", () => {
   demolishHousesOnTheStreet(city, "Happy street");

   expect(city.houses.length).toBe(1);
   expect(city.houses[0].id).toBe(1);
})
//01. создайте в том же файле еще одну ф-ю, чтобы тесты прошли
test("Houses should be repaired", () => {
   repairedHouse(city.houses[1]);

   expect(city.houses[1].repaired).toBeTruthy();
})
//01. создайте в том же файле еще одну ф-ю, чтобы тесты прошли

test("staff should be increased", () => {
   toFireStaff(city.govBuildings[0], 20);

   expect(city.govBuildings[0].staffCount).toBe(180)
})

test("House should be repared", () => {
   toHairStaff(city.govBuildings, 20)

   expect(city.govBuildings[0].staffCount).toBe(220)
})