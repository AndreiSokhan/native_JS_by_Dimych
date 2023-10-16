export type CityType = {
   title: string,
   houses: Array<HouseType>,
   govBuildings: GovernmentType,
   citizenNum: number
}

export type HouseType = {
   id: number
   buildedAt: number
   repaired: boolean
   address: AddressType
}

export type AddressType = {
   number?: number
   street: StreetType
}

export type StreetType = {
   title: string
}

export type GovernmentType = {
   id: number
   type: "HOSPITAL" | "FIRE-STATION"
   budget: number
   staffCount: number
   address: AddressType
}

