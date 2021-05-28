import { Box, Typography } from '@material-ui/core';
import { memo } from 'react';

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