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


export default function JsHistorySlide() {
  return (
      <Slide>
        <Heading size={4} textColor="secondary" style={{margin: 0}}>
          Brief JS History
        </Heading>
        <List style={{marginTop: 22}}>
          <ListItem>
            <ListHeading>
              1995 - Javascript is born
            </ListHeading>
            <SubList>
              <SubListItem>
                Brendan Eich, a Netscape employee, creates The original prototype of Javascript was made in 10 days in 1995
              </SubListItem>
              <SubListItem>
                Allows "live" manipulation of DOM elements after page has loaded
              </SubListItem>
            </SubList>
          </ListItem>
          <ListItem>
            <ListHeading>
              2006 - JQuery
            </ListHeading>
            <SubList>
              <SubListItem>
                Standardized cross-browser JS APIs
              </SubListItem>
              <SubListItem>
                Made JS DOM selectors which mimicked already widely-used CSS selectors
              </SubListItem>
            </SubList>
          </ListItem>
          <ListItem>
            <ListHeading>
              2009 - Node.js
            </ListHeading>
            <SubList>
              <SubListItem>
                Ryan Dahl brings V8 (Google's JS engine) out of the browser 
              </SubListItem>
              <SubListItem>
                Thought a language built on a non-blocking event loop was the best abstraction for web servers
              </SubListItem>
            </SubList>
          </ListItem>
          <ListItem>
            <ListHeading>
              2010 - Angular.js
            </ListHeading>
            <SubList>
              <SubListItem>
                Declarative, robust (and opionated) client-side application framework
              </SubListItem>
            </SubList>
          </ListItem>
          <ListItem>
            <ListHeading>
              2013 - React.js
            </ListHeading>
          </ListItem>
        </List>
      </Slide>
  );
}
