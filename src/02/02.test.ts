import {CityType} from "./02_02";

let city: CityType;

beforeEach(() => {
   city = {
      title: "New York",
      houses: [
         {id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title:"White street"}}},
         {id: 2, buildedAt: 2008, repaired: false, address: {number: 100, street: {title:"Happy street"}}},
         {id: 3, buildedAt: 2020, repaired: false, address: {number: 101, street: {title:"Happy street"}}}
      ],
      govBuildings: [
         {id:1, type:"HOSPITAL", budget:200000, staffCount:200, address: {street: {title:"Central str"}}},
         {id:2, type:"FIRE-STATION", budget:500000, staffCount:1000, address: {street: {title:"South str"}}}
      ],
      citizenNum: 1000000
   }
})

// 1. создать тип CityPropsType
// 2. заполнить объект city, так чтобы тесты ниже прошли
test.skip("test city should contains 3 houses", () => {
   expect(city.houses.length).toBe(3);

   expect(city.houses[0].buildedAt).toBe(2012);
   expect(city.houses[0].repaired).toBe(false);
   expect(city.houses[0].address.number).toBe(100);
   expect(city.houses[0].address.street.title).toBe("White street");

   expect(city.houses[1].buildedAt).toBe(2008);
   expect(city.houses[1].repaired).toBe(false);
   expect(city.houses[1].address.number).toBe(100);
   expect(city.houses[1].address.street.title).toBe("Happy street");

   expect(city.houses[2].buildedAt).toBe(2020);
   expect(city.houses[2].repaired).toBe(false);
   expect(city.houses[2].address.number).toBe(101);
   expect(city.houses[2].address.street.title).toBe("Happy street");
})
//1.дополнить тип GovernmentType
//2. заполнить объект city? чтобы тесты ниже прошли
test("test city should contains hodpital and fire station", ()=>{
   expect(city.govBuildings.length).toBe(2);

   expect(city.govBuildings[0].type).toBe("HOSPITAL");
   expect(city.govBuildings[0].budget).toBe(200000);
   expect(city.govBuildings[0].staffCount).toBe(200);
   expect(city.govBuildings[0].address.street.title).toBe("Central str")  ;

   expect(city.govBuildings[1].type).toBe("FIRE-STATION");
   expect(city.govBuildings[1].budget).toBe(500000);
   expect(city.govBuildings[1].staffCount).toBe(1000);
   expect(city.govBuildings[1].address.street.title).toBe("South str");

})
