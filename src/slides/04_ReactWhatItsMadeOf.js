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


const HeadingQuestion = styled.i`
  font-weight: 100;
`

export default function ReactWhatItsMadeOfSlide() {
  return (
      <Slide>
        <Heading size={4} textColor="secondary">
          React.js - What Is It?
        </Heading>
        <List>
          <ListItem>
            <ListHeading>
              Virtual DOM - <HeadingQuestion>What does the HTML look like now?</HeadingQuestion>
            </ListHeading>
            <SubList>
              <SubListItem>
                In-memory representation of the DOM
              </SubListItem>
            </SubList>
          </ListItem>
          <ListItem>
            <ListHeading>
              Diffing Algorithm - <HeadingQuestion>What is Changing?</HeadingQuestion>
            </ListHeading>
            <SubList>
              <SubListItem>
                Upon a state change (via "setState")
                <SubList>
                  <SubListItem style={{fontSize: '28.95px', lineHeight: 1.3}}>
                      A new Virtual DOM is created and compared to current VDOM to determine "diff"
                  </SubListItem>
                </SubList>
              </SubListItem>
            </SubList>
          </ListItem>
          <ListItem>
            <ListHeading>
              Reconciler - <HeadingQuestion>Go apply changes to HTML</HeadingQuestion>
            </ListHeading>
            <SubList>
              <SubListItem>
                Updates get batched into a single operation!
              </SubListItem>
              <SubListItem>
                This reconciler can be swapped out!
                <SubList>
                  <SubListItem style={{fontSize: '28.95px', lineHeight: 1.3}}>
                      React-DOM
                  </SubListItem>
                  <SubListItem style={{fontSize: '28.95px', lineHeight: 1.3}}>
                      React-Native
                  </SubListItem>
                  <SubListItem style={{fontSize: '28.95px', lineHeight: 1.3}}>
                      React-Three-Fiber
                  </SubListItem>
                </SubList>
              </SubListItem>
            </SubList>
          </ListItem>
        </List>
      </Slide>
  );
}
