import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import React from 'react';
import ToggleLanguageButton from '../ToggleLanguageButton';

const Navbar = observer(() => {
    return (
        <Box paddingBottom={4}>
            <ToggleLanguageButton/>
        </Box>
    )
})

export default Navbar;