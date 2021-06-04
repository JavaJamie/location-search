import { useRouter } from 'next/router';
import React from 'react';
import { Button, Link } from '@material-ui/core';

/**
 * The @BackButton is a simple button which uses the History API to navigate back to the previous page.
 * 
 * @returns 
 * @author jlee
 */
const BackButton = () => {
    const router = useRouter();
    return <Button color="primary" component={Link} onClick={() => router.back()} >Go back</Button>
}

export default BackButton;