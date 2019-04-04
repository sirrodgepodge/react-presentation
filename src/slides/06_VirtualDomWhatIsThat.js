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
              The virtual DOM (VDOM) is a programming concept where a “virtual” representation of a DOM tree is kept in-memory and synced with the “real” DOM by a library such as ReactDOM
          </Quote>
          <Cite>
            <a href="https://reactjs.org/docs/faq-internals.html">
              React Internals FAQ
            </a>
          </Cite>
        </BlockQuote>
    </Slide>
  );
}
