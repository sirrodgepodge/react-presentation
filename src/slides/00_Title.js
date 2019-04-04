// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Heading,
    Text,
} from 'spectacle';

import Slide from './Slide';

export default function TitleSlide() {
    return (
        <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                React.js
            </Heading>
            <Text margin="0px 0 0" textColor="tertiary" size={1} fit bold>
            + how we got there
            </Text>
        </Slide>
    );
}
