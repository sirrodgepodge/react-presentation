// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Slide,
} from 'spectacle';

export default function DecoratedSlide({children}) {
    return (
      <Slide
        bgColor="white"
        transitionDuration={500}
      >
        {children}
      </Slide>
    )
  }