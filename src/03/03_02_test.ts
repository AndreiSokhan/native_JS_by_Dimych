import {CityType} from "../02/02_02";
import {addMoneyToBudget, reparirHouse, toFireStaff} from "./03";
import exp from "constants";
import {getHeapCodeStatistics} from "v8";

let city: CityType;

beforeEach(() => {
   city = {
      title: "New York",
      houses: [
         {
            buildedAt: 2012, repaired: false,
            address: {
               number: 100,
               street: {title: "White street"}
            }
         },
         {
            buildedAt: 2008, repaired: false,
            address: {
               number: 100,
               street: {title: "Happy street"}
            }
         },
         {
            buildedAt: 2020, repaired: false,
            address: {
               number: 101,
               street: {title: "Happy street"}
            }
         },

      ],
      governmentBuildings: [
         {
            type: "HOSPITAL", budget: 200000, staffCount: 200,
            address: {
               street: {title: "Centrsl Str"}
            }
         },
         {
            type: "FIRESTATION", budget: 500000, staffCount: 500,
            address: {
               street: {title: "South Str"}
            }
         }
      ],
      citizenNumbers: 1000000
   }
})

//01. создайте в отдельном файле функцию, чтобы тесты прошли
test("Budget should be changed for HOSPITAL", ()=>{
   addMoneyToBudget(city.governmentBuildings[0], 100000);

   expect(city.governmentBuildings[0].budget).toBe(300000)
   expect(city.governmentBuildings[1].budget).toBe(500000)
})
// тесты должны пройти
test("Budget should be changed for HOSPITAL", ()=>{
   addMoneyToBudget(city.governmentBuildings[1], -100000);

   expect(city.governmentBuildings[0].budget).toBe(200000)
   expect(city.governmentBuildings[1].budget).toBe(400000)
})

// дополните тип HouseType (добавить порядковый id от 1 и по возрастанию)
// создать в том же файле еще одну функцию, чтобы тесты прошли
// test("Houses should be destroyed", ()=>{
//    demolishHousesOnTheStreet(city, "Happy street");
//
//
//    expect(city.houses.length).toBe(1);
//    expect(city.houses[0].id).toBe(1);
// })

// создать еще 1 функцию, чтобы тесты прошли
test("House should be repared", ()=>{
   reparirHouse(city.houses[0]);

   expect(city.houses[1].repaired).toBetrythy();
})

test ("staff should be increased", ()=>{
   toFireStaff(city.governmentBuildings[0],-20);
   expect(city.governmentBuildings[0].staffCount).toBe(180)
})
