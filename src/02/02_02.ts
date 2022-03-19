export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type govermentBuildingsType = {
    type: "Hospital" | "Fire-Station"
    budget: number
    stuffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<govermentBuildingsType>
    citizensNumber: number
}