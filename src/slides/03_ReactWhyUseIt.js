// Import React
import React from 'react';
import styled from '@emotion/styled'

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
} from 'spectacle';

import Slide from './Slide';
import ListHeading from './ListHeading';
import SubList, { SubListItem } from './SubList';
import ReactPerformanceImg from '../images/ReactPerformance.png'


export default function ReactWhyUseIdSlide() {
    return (
        <Slide>
          <Heading size={4} textColor="secondary">
            React.js - Why Use It?
          </Heading>
          <List>
            <ListItem>
              <ListHeading>
                Client Agnosticism
              </ListHeading>
              <SubList>
                <SubListItem>
                  React can now easily be used for web + desktop + mobile applications
                </SubListItem>
              </SubList>
            </ListItem>
            <ListItem>
              <ListHeading>
                React ecosystem + Interop with NPM ecosystem
              </ListHeading>
              <SubList>
                <SubListItem>
                  The limited scope and API surface area allows simple integration of other React & JS libraries
                </SubListItem>
              </SubList>
            </ListItem>
            <ListItem>
              <ListHeading>
                Speed
              </ListHeading>
              <SubList>
                <SubListItem style={{listStyle: 'none', display: 'inline-flex', width: '100%', justifyContent: 'center'}}>
                  <img src={ReactPerformanceImg} />
                </SubListItem>
                <SubListItem>
                  Particularly for older browsers/computers + mobile browsing
                </SubListItem>
              </SubList>
            </ListItem>
          </List>
        </Slide>
    );
}
