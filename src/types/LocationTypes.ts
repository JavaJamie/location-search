
/** The format of each location object that is returned from the API. In production, we could generate these typings and server stubs via the backend
    (OpenAPI Tools is one such example)
**/
export interface ILocation {
    name: string,
    id: string
}

export interface ILocationDetails extends ILocation { 
    latitude: number,
    longitude: number
}