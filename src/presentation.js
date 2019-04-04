// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
} from 'spectacle';

// Import Spectacle Core tags
import {
  Slide as RawSlide,
} from 'spectacle';

import TitleSlide from './slides/00_Title';
import EichQuoteSlide from './slides/01_EichQuote';
import JsHistorySlide from './slides/02_JsHistory';
import ReactWhyUseIt from './slides/03_ReactWhyUseIt';
import ReactWhatItsMadeOf from './slides/04_ReactWhatItsMadeOf';
import DomWhatIsThat from './slides/05_DomWhatIsThat';
import VirtualDomWhatIsThat from './slides/06_VirtualDomWhatIsThat';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'transparent',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <>
        <style>
          {`
            .spectacle-deck>*>* {
              backface-visibility: hidden;
            }
            .spectacle-content {
              max-height: 800px;
            }
            pre {
              border-radius: 10px;
            }
            ul, ol {
              list-style-position: outside !important;
            }
          `}
        </style>
        <Deck
          theme={theme}
          transition={['spin', 'zoom', 'slide']}
          transitionOut={[]}
          transitionDuration={1000}
        >
          <TitleSlide />
          <EichQuoteSlide />
          <JsHistorySlide />
          <ReactWhyUseIt />
          <ReactWhatItsMadeOf />
          <DomWhatIsThat />
          <VirtualDomWhatIsThat />
        </Deck>
      </>
    );
  }
}
