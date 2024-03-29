import { Avatar, Box, List } from '@mui/material';
import { styled } from '@mui/system';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { IoSearchOutline } from 'react-icons/io5';

export const MenuOuterContainer = styled(Box)(() => ({
  marginTop: 16,
  height: 40,
  position: 'relative',
}));

export const MenuContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  backgroundColor: '#fff',
  borderRadius: 4,
  padding: '0px 8px',
  border: '1px solid #edeff1',
  width: '100%',
}));

export const SubredditSearchField = styled('input')(({ theme }) => ({
  border: 0,
  '&:focus-visible': {
    outline: '0',
  },
  fontSize: 14,
  caretColor: theme.palette.primary.main,
  fontWeight: 500,
  flexGrow: 1,
  paddingLeft: 8,
  '&::placeholder': {
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
  },
}));

export const DashedCircle = styled('div')(() => ({
  border: '1px dashed #878a8c',
  width: 22,
  height: 22,
  borderRadius: '50%',
}));

export const DropIcon = styled(HiOutlineChevronDown)(({ theme }) => ({
  color: theme?.palette?.third?.main,
  fontSize: 18,
  cursor: 'pointer',
}));

export const CustomList = styled(List)(() => ({
  padding: 0,
}));

export const SubredditsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '104%',
  zIndex: theme.zIndex.tooltip,
  maxHeight: 400,
  backgroundColor: '#fff',
  width: '100%',
  borderRadius: 4,
  overflowY: 'scroll',
  [theme?.breakpoints.up('sm')]: {
    width: '300px',
  },
}));

export const ClickAwayContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme?.breakpoints.up('sm')]: {
    width: '300px',
  },
  height: '100%',
}));

export const CommunityCategory = styled(Box)(({ theme }) => ({
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: 0.9,
  lineHeight: '12px',
  textTransform: 'uppercase',
  color: theme?.palette?.third?.main,
}));

export const AvatarContainer = styled('div')(() => ({
  position: 'relative',
  width: 30,
  height: 30,
  backgroundColor: '#edeff1',
  borderRadius: 1,
  overflow: 'hidden',
}));

export const CustomAvatar = styled(Avatar)(() => ({
  width: 30,
  height: 30,
}));

export const CommunityName = styled(Box)(() => ({
  fontSize: 14,
  fontWeight: 500,
}));

export const CommunityAvatar = styled(Avatar)(({ theme }) => ({
  width: 33,
  height: 33,
  backgroundColor: theme.palette.primary.main,
}));

export const Members = styled(Box)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '16px',
  color: theme?.palette?.third?.main,
}));

export const CommunityContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 10,
}));

export const SearchIcon = styled(IoSearchOutline)(({ theme }) => ({
  fontSize: 22,
  color: theme?.palette?.third?.main,
}));

export const NoCommunitiesFound = styled(Box)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '18px',
  padding: 20,
  color: theme?.palette?.third?.main,
  textAlign: 'center',
}
));

export const ChosenCommunityIcon = styled(Avatar)(({ theme, ownerType }) => ({
  height: 22,
  width: 22,
  backgroundColor: (ownerType === 'Subreddit') && theme.palette.primary.main,
}));
