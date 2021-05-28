import { useRouter } from 'next/router';
import React from 'react';
import { Button, Link } from '@material-ui/core';

const BackButton = () => {
    const router = useRouter();
    return <Button color="primary" component={Link} onClick={() => router.back()} >Go back</Button>
}

export default BackButton;