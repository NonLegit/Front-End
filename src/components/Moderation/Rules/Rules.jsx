import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import getSubredditAllData from '../../SubReddit/SubrridetDataServer';
import AddRule from './AddRule/AddRyle';
import Entity from './Entity/Entity';
import {
  AboutDisc, AboutString, Add, AddFlair, Header, IconBtn, LeftAlighne, StyledTooltip, TotalContainer,
} from './style';

/**
 * Rules
 * @component
 *
 * @return {React.Component} - Rules
 */

export default function Rules() {
  const [rules, setRules] = useState([]);
  const [editRule, setefitRule] = useState();

  const { subReddit } = useParams();
  const [data, dataError] = getSubredditAllData(subReddit);
  const value = useMemo(() => ({ data, dataError }), [data, dataError]);
  useEffect(() => {
    setRules(data?.rules);
    console.log(dataError);
  }, [rules, data]);

  console.log(value);

  return (
    <TotalContainer>
      <AddFlair>
        <Add onClick={() => { const ele = document.getElementById('add'); setefitRule(null); ele.click(); }}>Add Rule</Add>
        <AddRule rule={editRule} />
      </AddFlair>
      <LeftAlighne>
        <Header>
          <AboutString>
            Rules
            <StyledTooltip
              title="Learn more"
            >
              <IconBtn>
                <ErrorOutlineIcon color="primary" sx={{ transform: 'rotate(180deg)', paddingTop: '5px' }} />
              </IconBtn>
            </StyledTooltip>
          </AboutString>
          <AboutDisc>
            These are rules that visitors must follow to participate.
            They can be used as reasons to report or ban posts,
            comments, and users. Communities can have a maximum of 15 rules.
          </AboutDisc>
        </Header>
        <TotalContainer>
          {rules?.map((row, index) => (
            <Entity row={row} index={index} setefitRule={setefitRule} />
          ))}
        </TotalContainer>
      </LeftAlighne>
    </TotalContainer>
  );
}
