import { Box, Typography } from '@material-ui/core';
import { memo } from 'react';

/**
 * The @Footer component is just a placeholder for now, but is demonstrates the use of memoisation as this should never change between renders.
 * 
 * @author jlee
 */
export const Footer = memo(() => {

    return (
        <Box component="footer" padding={3}>
            <Typography variant="caption">
                Footer content
            </Typography>
        </Box>
    );
});

export default Footer;