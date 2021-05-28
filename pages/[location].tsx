import { Box, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import BackButton from '../src/components/buttons/BackButton';
import MapChart from '../src/components/Map';
import { useGetLocation } from '../src/hooks';

/**
 * The @Location component renders the specific details of a @see ILocation based on its id and also a map view of this pinpointing its coordinates (lat and long)
 * 
 * @see {@link LocationTypes}
 * @returns 
 * @author jlee
 */
const Location: FC = () => {

    const locationDetails = useGetLocation();

    return (
        <Box padding={3}>
            {locationDetails && (
                <Box padding={3}>
                    <BackButton />
                    <Box marginBottom={3} flexDirection="column">
                        <Typography variant="h4">Name: {locationDetails.name}</Typography>
                        <Typography variant="h6">Lat: {locationDetails.latitude} | Long: {locationDetails.longitude}</Typography>
                    </Box>
                    <MapChart location={locationDetails} />
                </Box>
            )}
        </Box>
    )
}

export default Location;