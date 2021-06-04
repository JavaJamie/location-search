
/** The format of each location object that is returned from the API. In production, we could generate these typings and server stubs via the backend
    (OpenAPI Tools is one such example)
**/
export interface ILocation {
    name: string,
    id: string
}

/**
 * The @ILocationDetails provides the coordinates of the selected location, and extends @see ILocation as it also returns the @name @id fields.
 * 
 * @author jlee
 */
export interface ILocationDetails extends ILocation { 
    latitude: number,
    longitude: number
}