import { styled } from "@mui/system";
import {Box as MUIBox} from '@mui/material'

export const MainLayout = styled(MUIBox)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   minHeight: '100vh',
   backgroundColor: theme.palette.background.default,
}))

export const Container = styled(MUIBox)(({theme}) => (
   {
      maxWidth: '1200px',
      margin: '0 auto'
   }
))