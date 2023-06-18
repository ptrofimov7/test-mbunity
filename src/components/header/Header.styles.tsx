import { Link as MUILink, Box as MUIBox, Typography as MUITypography, styled } from '@mui/material'

export const Container = styled(MUIBox)(({ theme }) => ({
  position: 'sticky',
  left: 0,
  right: 0,
  zIndex: 5,
  width: '100%',
  height: '81px',
  padding: '0 20px',
  transition: 'all .3s ease-in',
  filter: 'drop-shadow(0px -2px 4px rgba(0, 0, 0, 0.1))',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    position: 'static',
    height: '110px',
    padding: '0 100px',
    filter: 'none',
  },

  [theme.breakpoints.up('sm')]: {
    padding: '0 50px',
  },

}))

export const Logo = styled(MUILink, {
  shouldForwardProp: prop => prop !== 'isMenuOpen',
  //@ts-ignore
})(({ theme, isMenuOpen }) => ({
  fontWeight: '800',
  fontSize: '24px',
  lineHeight: '29px',
  color: isMenuOpen ? theme.palette.secondary.main : theme.palette.primary.main,
  transition: 'all .4s ease-in',
  zIndex: 2,

  [theme.breakpoints.up('md')]: {
    color: theme.palette.primary.main,
  },
}))

export const MenuContainer = styled(MUIBox, {shouldForwardProp: prop => prop !== 'isMenuOpen'})
//@ts-ignore
(({ theme, isMenuOpen }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '30px',
  backgroundColor: theme.palette.primary.main,
  opacity: `${isMenuOpen ? 1 : 0}`,
  zIndex: `${isMenuOpen ? 1: -2}`,
  visibility: `${isMenuOpen ? 'visible' : 'hidden'}`,
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  padding: '110px 23px 30px 23px',

  transition: '.4s ease-in',
  transitionProperty: 'opacity, z-index, padding, visibility',

  '& .MuiLink-root': {
    color: theme.palette.secondary.main,
    textAlign: 'left',
    width: 'fit-content'
  },

  '& > .MuiLink': {
    width: '100%',
  },

  '& svg': {
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.up('sm')]: {
    padding: '110px 50px 30px 50px',
  },

  [theme.breakpoints.up('md')]: {
    position: 'sticky',
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '47px',
    padding: 0,
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    zIndex: 3,
    opacity: 1,
    visibility: 'visible',

    '& .MuiLink-root': {
      color: theme.palette.primary.dark,
    },

    '& svg': {
      color: theme.palette.primary.dark,
    },
  },
}));

export const IconsBlock = styled(MUIBox)(({ theme }) => ({
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
  gap: '36px'
}))

export const LinkWithIcon = styled(MUILink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  width: '100%',

  '& .MuiLink-root': {
    width: 'auto',
  },

  '& svg': {
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.up('md')]: {
    '& svg': {
      color: theme.palette.primary.dark,
    },
  },
}))


export const IconContainer = styled(MUIBox)(({ theme }) => ({
  cursor: 'pointer',
  width: '31px',
  height: '31px',
  '& svg': {
    filter: 'invert(1)',
  },
  [theme.breakpoints.up('md')]: {
    '& svg': {
      filter: 'none',
    }
  }
}))

export const MenuButton = styled(MUIBox)(({ theme }) => ({
  display: 'block',
  height: '24px',
  width: '24px',
  padding: '3px',
  cursor: 'pointer',
  zIndex: 3,
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))