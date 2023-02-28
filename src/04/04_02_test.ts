import {CityType} from "../02/02_02";
import {addMoneyToBudget, reparirHouse, toFireStaff} from "./03";
import exp from "constants";
import {getHeapCodeStatistics} from "v8";
import {demolishHousesOnTheStreet} from "./04_2";

let city: CityType;

beforeEach(() => {
   city = {
      title: "New York",
      houses: [
         {
            id: 1,
            buildedAt: 2012, repaired: false,
            address: {
               number: 100,
               street: {title: "White street"}
            }
         },
         {
            id: 2,
            buildedAt: 2008, repaired: false,
            address: {
               number: 100,
               street: {title: "Happy street"}
            }
         },
         {
            id: 3,
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

//01. дополнить тип HouseType (добавить порядковый id от 1 и далее по возрастанию)
//02. создать в том же файле еще одну функцию, чтобы тесты прошли
test.("Houses should be destroyed", () => {
   demolishHousesOnTheStreet(city, "Happy street");
   expect(city.houses.length).toBe(1);
   expect(city.houses[0].id).toBe(1);
})