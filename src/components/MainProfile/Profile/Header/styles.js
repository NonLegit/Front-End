import {
  AppBar, Box, Button, styled,
} from '@mui/material';

export const HeaderBox = styled(Box)(({ theme, subtitle }) => ({
  minHeight: 40,
  display: 'flex',
  // justifyContent: 'center',
  marginLeft: 24,
  ...((subtitle === undefined
|| subtitle === '?sort=new'
|| subtitle === '?sort=hot'
|| subtitle === '?sort=top'
|| subtitle === '?sort=top&t=day'
  ) && {
    marginLeft: 'calc((100% - 976px) / 2);',
  }),
  [theme.breakpoints.between('0', '970')]: {
    marginLeft: 24,
  },
  [theme.breakpoints.between('0', '630')]: {
    marginLeft: 5,
  },

}));

export const PageHeader = styled(AppBar)(() => ({
  backgroundColor: 'white',
  color: '#1a1a1b',
  boxShadow: 'none',

}));

export const HeaderButton = styled(Button)(({
  theme, condition, responsive, removedots,
}) => ({
  fontWeight: 500,
  fontSize: 14,
  fontFamily: "'IBM Plex Sans', 'sans-serif'",
  marginRight: 5,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  ...((condition === 'true') && {
    '&:before': {
      content: '" "',
      width: '100%',
      height: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      bottom: 0,

    },
    color: theme.palette.primary.main,
  }),
  ...((responsive === 'res1') && {
    [theme.breakpoints.between('0', '1000')]: {
      display: 'none',
    },
  }),
  ...((responsive === 'res2') && {
    [theme.breakpoints.between('0', '900')]: {
      display: 'none',
    },
  }),
  ...((responsive === 'res3') && {
    [theme.breakpoints.between('0', '700')]: {
      display: 'none',
    },
  }),
  ...((responsive === 'res4') && {
    [theme.breakpoints.between('0', '500')]: {
      display: 'none',
    },
  }),
  ...((responsive === 'res5') && {
    [theme.breakpoints.between('0', '400')]: {
      display: 'none',
    },
  }),
  ...((responsive === 'res6') && {
    [theme.breakpoints.between('0', '350')]: {
      display: 'none',
    },
  }),
  ...((removedots === 'true') && {
    [theme.breakpoints.between('1000', '3000')]: {
      display: 'none',
    },
  }),
}));

export const SelectBox = styled(Box)(({ theme }) => ({
  maxWidth: 200,
  top: 30,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  [theme.breakpoints.between('0', '512')]: {
    marginLeft: -40,
  },
}));

export const SelectItem = styled(Button)(({ theme, responsive }) => ({
  padding: 5,
  color: 'black',
  fontFamily: "'IBM Plex Sans', 'sans-serif'",
  fontSize: 14,
  fontWeight: 500,
  width: '100%',
  justifyContent: 'left',
  textTransform: 'none',
  display: 'none',
  '& .MuiButtonBase-root:hover': {
    color: 'black',
    backgroundColor: '#d7d7d7',
  },
  ...((responsive === 'res1') && {
    [theme.breakpoints.between('0', '1000')]: {
      display: 'block',
    },
  }),
  ...((responsive === 'res2') && {
    [theme.breakpoints.between('0', '900')]: {
      display: 'block',
    },
  }),
  ...((responsive === 'res3') && {
    [theme.breakpoints.between('0', '700')]: {
      display: 'block',
    },
  }),
  ...((responsive === 'res4') && {
    [theme.breakpoints.between('0', '500')]: {
      display: 'block',
    },
  }),
  ...((responsive === 'res5') && {
    [theme.breakpoints.between('0', '400')]: {
      display: 'block',
    },
  }),
  ...((responsive === 'res6') && {
    [theme.breakpoints.between('0', '350')]: {
      display: 'block',
    },
  }),
}));
