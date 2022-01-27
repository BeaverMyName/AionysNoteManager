import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { observer } from "mobx-react";
import React, { useState } from "react";
import i18n from "../../locales/config";

const ToggleLanguageButton = observer(() => {
    const [language, setLanguage] = useState('en');

    const handleChange = (event: React.MouseEvent, newLanguage: string) => {
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    }

    return (
        <ToggleButtonGroup
            className='language-toggle-button'
            value={language}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value='en'>
                EN
            </ToggleButton>
            <ToggleButton value='ru'>
                RU
            </ToggleButton>
        </ToggleButtonGroup>
    )
})

export default ToggleLanguageButton;