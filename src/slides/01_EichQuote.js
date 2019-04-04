// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Quote,
} from 'spectacle';

import Slide from './Slide';

export default function EichQuoteSlide() {
    return (
        <Slide>
            <BlockQuote>
            <Quote  textColor="secondary" style={{fontSize: '1.5em', lineHeight: 1.2, fontWeight: 900}}>
                "...With a scripting language like JS that could touch elements of the page, change their properties, and respond to events, we envisioned a much livelier Web consisting of pages that acted more like applications."
            </Quote>
            <Cite>Brendan Eich, creator of Javascript</Cite>
            </BlockQuote>
        </Slide>
    );
}
