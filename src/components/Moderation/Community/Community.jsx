/* eslint-disable max-len */
import { Box, Switch } from '@mui/material';
import { useState } from 'react';
import CommunityMianTopic from './CommumityMainTopics/CmmunityMainTopics';
import RadioBtn from './CommunityType/CommunityType';
import CountrySelect from './Region/Region';
import {
  AboutString,
  AboutSubString,
  Add,
  AddFlair,
  Adult,
  Container,
  Count,
  Disc,
  FlexBox,
  FlexBoxColumn,
  InputName,
  LeftAlighne,
  NSFWs,
  Section,
  SmallDisc,
  TextArea,
  TotalContainer,
  Warning,
} from './style';

export default function Community() {
  const [count, setCount] = useState(100);
  const [countDisc, setCountDisc] = useState(100);
  const [type, setType] = useState('');
  const [topics] = useState([]);
  // setTopics(['ahmed', 'ss']);
  const myType = (t) => {
    setType(t);
    console.log(type);
  };
  const check = (e) => {
    const ele = e?.target?.value;
    setCount(100 - ele.length);
  };
  const checkDisc = (e) => {
    const ele = e?.target?.value;
    setCountDisc(100 - ele.length);
  };
  return (
    <TotalContainer>
      <AddFlair><Add>Save Change</Add></AddFlair>
      <LeftAlighne>
        <Container>
          <AboutString>
            Community settings
          </AboutString>
          <Disc>COMMUNITY PROFILE</Disc>
          <Section>
            <AboutSubString>
              Community name
            </AboutSubString>
            <InputName
              type="text"
              defaultValue="hosny"
              onChange={check}
              onInput={(e) => {
              // eslint-disable-next-line radix
                e.target.value = e.target.value.slice(0, 100);
              }}
            />
            <Count
              condition={(count === 0).toString()}
            >
              {count}
              {' '}
              Characters remaining
            </Count>
          </Section>
          {/* community topics */}
          <Section>
            <FlexBox>
              <FlexBoxColumn>
                <AboutSubString>Community topics</AboutSubString>
                <SmallDisc>This will help Reddit recommend your community to relevant users and other discovery experiences.</SmallDisc>
              </FlexBoxColumn>
              <Count
                condition={(count === 25).toString()}
              >
                {topics?.length}
                /
                25
              </Count>
            </FlexBox>
            <CommunityMianTopic topics={topics} Name="Hosny" primaryTopic="Art" />
          </Section>
          <Section>
            <AboutSubString>
              Community description
            </AboutSubString>
            <SmallDisc>
              This is how new members come to understand your community.
            </SmallDisc>
            <TextArea
              onChange={checkDisc}
              defaultValue="aaaaaaa"
              onInput={(e) => {
              // eslint-disable-next-line radix
                e.target.value = e.target.value.slice(0, 100);
              }}
            />
            <Count
              condition={(countDisc === 0).toString()}
            >
              {countDisc}
              {' '}
              Characters remaining
            </Count>
          </Section>
          <Section>
            <Disc>COMMUNITY LOCATION AND MAIN LANGUAGE</Disc>
            <SmallDisc marginTop="-14px">
              Adding a location helps your community show up in search results and
              recommendations and helps local redditors find it easier.
            </SmallDisc>
          </Section>
          <Section>
            <AboutSubString>
              Region
            </AboutSubString>
            <Box sx={{ marginLeft: '17px' }}>
              <CountrySelect Location="Anguilla" />
            </Box>
          </Section>
          <Section>
            <Disc>COMMUNITY TYPE</Disc>
          </Section>
          <Section>
            <RadioBtn myType={myType} />
          </Section>
          <Section>
            <FlexBox>
              <FlexBoxColumn>
                <Adult>
                  <Warning>18+ year old community</Warning>
                  <NSFWs>NSFW</NSFWs>
                </Adult>
                <SmallDisc>
                  When your community is marked as an 18+ community, users must be flagged as 18+ in their user settings
                </SmallDisc>
              </FlexBoxColumn>
              <Switch defaultChecked={false} value="+18" />
            </FlexBox>
          </Section>
        </Container>
      </LeftAlighne>
    </TotalContainer>
  );
}
