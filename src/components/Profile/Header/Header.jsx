import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import { PageHeader, HeaderBox, HeaderButton } from './styles';

function Header() {
  const { subTitle } = useParams();
  const navigate = useNavigate();

  // navigate
  const handleClick = (subPage) => {
    navigate(`${subPage}`);
    // console.log(filteration);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <PageHeader position="static">
        <HeaderBox>
          <HeaderButton
            color="inherit"
            onClick={() => { handleClick(''); }}
            condition={(subTitle === undefined || subTitle.includes('sort')).toString()}
          >
            overview

          </HeaderButton>
          {['posts', 'comments', 'history', 'saved', 'hidden', 'upvoted', 'downvoted'].map((text) => (
            <HeaderButton
              color="inherit"
              key={text}
              onClick={() => { handleClick(`${text}`); }}
              condition={(subTitle === text).toString()}
            >
              {text}

            </HeaderButton>
          ))}
        </HeaderBox>
      </PageHeader>
    </Box>
  );
}

export default Header;
