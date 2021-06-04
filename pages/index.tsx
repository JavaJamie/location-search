import { Box, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import Head from 'next/head';
import { FC, useState } from "react";
import Footer from '../src/components/Footer';
import { useLocationSearch } from "../src/hooks";
import { useRouter } from 'next/router';
import { ILocation } from '../src/types';

/**
 * The @Home page is the first page we see as it's the index. This page renders a simple auto-complete dropdown which retrieves locations upon text change, and subsequently
 * directs the user to a new page with the selected coordinates.
 * 
 * @returns 
 * @author jlee
 */
const Home: FC = () => {
	const [query, setQuery] = useState("");
	const results = useLocationSearch(query);
	const router = useRouter();

	const onQueryChange = (event: object, value: string) => setQuery(value);
	const onLocationClick = (event: object, value: ILocation) => router.push(`${value.id}`);

	return (
		<Box display="flex" flex={1} flexDirection="column" justifyContent="center" alignItems="center" height="100vh" maxHeight="100vh">
			<Head>
				<title>Locations</title>
				<meta name="description" content="Locations search" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box component="nav" padding={3} color="primary" bgcolor="secondary">
				<Typography id="title" variant="h4">
					Location search
				</Typography>
			</Box>

			<Box component="main" display="flex" flex={1} justifyContent="center" alignItems="center">
				<label htmlFor="location-search-dropdown">Location search dropdown</label>
				<Autocomplete
					id="location-search-dropdown"
					options={results}
					getOptionLabel={(option) => option.name}
					style={{ width: 300 }}
					onInputChange={onQueryChange}
					renderInput={(params) => <TextField {...params} label="Search location" variant="outlined" />}
					onChange={onLocationClick}
					noOptionsText="No locations."
    			/>
			</Box>

			<Footer />
		</Box>
	);
}

export default Home;