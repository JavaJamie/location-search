import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ILocation, ILocationDetails } from '../types';

axios.defaults.baseURL = "https://code-challenge-backend.herokuapp.com";

/**
 * The @useLocationSearch hook searches for location based on the passed in query string of @q
 * When results are returned, they are set in the state and subsequently returned.
 * If @q changes, then the query is executed on update to fetch the new results.
 * 
 * @param q 
 * @author jlee
 */
export const useLocationSearch = (q: string) => {
    const [locations, setLocations] = useState<Array<ILocation>>([]);

    useEffect(() => {
        async function getLocations() {
            const result = await axios.get(axios.defaults.baseURL + "/locations?q=" + q.toString()); // Fetch locations via GET to return array of locations
            const json = await result.data;
            setLocations(json);
        }

        getLocations();
    }, [q]); // Fetch locations upon q change

    return locations;
}

export const useGetLocation = () => {
    const router = useRouter();
    const { location } = router.query;
    const [locationDetails, setLocationDetails] = useState<ILocationDetails>();

    useEffect(() => {
        async function getLocationDetails() {
            const result = await axios.get(axios.defaults.baseURL + "/locations/" + location); // Fetch locations via GET to return array of locations
            const json = await result.data;
            setLocationDetails(json);
        }

        if (location) getLocationDetails();
    }, [location]); // Fetch locations upon q change

    return locationDetails;
}