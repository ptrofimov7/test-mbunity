import { styled, Typography as MUITypography } from "@mui/material";

export const Container = styled('section')(({ theme }) => ({
textAlign: 'center',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
width: '100%',
backgroundColor: theme.palette.background.default,
padding: '14px 20px 50px',
gap: '10px',
}))


export const Title = styled(MUITypography)(({ theme }) => ({
   color: theme.palette.primary.main,

   [theme.breakpoints.down('md')]: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '36px',
   }
}))


export const Subtitle = styled(MUITypography)(({ theme }) => ({
   width: '65%',
   minWidth: '150px',
   [theme.breakpoints.down('md')]: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '21px',
      marginBottom: '10px',
   }

}))