// Import React
import React from 'react';
import styled from '@emotion/styled'

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
  CodePane
} from 'spectacle';

import Slide from './Slide';
import ListHeading from './ListHeading';
import SubList, { SubListItem } from './SubList';
import DomTreeImg from '../images/DomTree.png'


const HeadingQuestion = styled.i`
  font-weight: 100;
`

export default function ReactWhatItsMadeOfSlide() {
  return (
      <Slide>
        <Heading size={4} textColor="secondary">
          DOM - What Is That?
        </Heading>
        <List>
          <ListItem>
            <ListHeading>
              A tree API for HTML (technically any XML)
            </ListHeading>
            <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
              <div style={{ width: 'calc(50% - 10px)' }}>
                <CodePane
                  lang="html"
                  source={`
<div>
    <p>
        <span>Something</span>
    </p>
    <a href="https://google.com">Go To Google</a>
</div>
                `.trim()}
                  margin="20px auto"
                  overflow="overflow"
                />
              </div>
              <div style={{ width: 'calc(50% - 10px)', border: '2px solid black', margin: '20px auto', borderRadius: '10px', paddingLeft: '11px' }}>
                <div>
                    <p style={{ margin: 0 }}>
                        <span>Something</span>
                    </p>
                    <a href="https://google.com">Go To Google</a>
                </div>
              </div>
            </div>
          </ListItem>
          <ListItem>
            <ListHeading>
              The DOM treats the above HTML as a tree like so
            </ListHeading>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12, marginBottom: 20 }}>
              <img src={DomTreeImg} />
            </div>
          </ListItem>
          <ListItem>
            <ListHeading>
              Browser rendering computations make "real" DOM updates expensive
            </ListHeading>
            <SubList style={{marginTop: 10}}>
              <SubListItem>
                Enter, the Virtual DOM!
              </SubListItem>
            </SubList>
          </ListItem>
        </List>
      </Slide>
  );
}
