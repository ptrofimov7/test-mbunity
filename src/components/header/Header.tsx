import { Link } from '@mui/material';
import * as Styles from './Header.styles.tsx'
import {KeyboardArrowDown as KeyboardArrowDownIcon, Close as CloseIcon} from '@mui/icons-material';
import { useState } from 'react';
//@ts-ignore
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';
//@ts-ignore
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
//@ts-ignore
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   return (
      <header>
         <Styles.Container>
             {/* @ts-ignore */}
            <Styles.Logo  component="button" isMenuOpen={isMenuOpen}>
               Logo Here
            </Styles.Logo>
            <Styles.MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </Styles.MenuButton>
             {/* @ts-ignore */}
            <Styles.MenuContainer isMenuOpen={isMenuOpen}>
               <Link
                  component="button"
                  variant="h5"
               >
                  Home
               </Link>
               {/* @ts-ignore */}
               <Styles.LinkWithIcon
                  // component="button"
                  variant="h5"
               >
                  <span>Features</span>
                  <KeyboardArrowDownIcon />
               </Styles.LinkWithIcon>
               <Link
                  component="button"
                  variant="h5"
               >
                  Blog
               </Link>
               <Link
                  component="button"
                  variant="h5"
               >
                  Shop
               </Link>
               <Link
                  component="button"
                  variant="h5"
               >
                  About
               </Link>
               <Link
                  component="button"
                  variant="h5"
                  sx={{ fontWeight: 600 }}
               >
                  Contact
               </Link>

               <Styles.IconsBlock>
                  <Styles.IconContainer>
                     <AvatarIcon />
                  </Styles.IconContainer>
                  <Styles.IconContainer>
                     <CartIcon />
                  </Styles.IconContainer>
               </Styles.IconsBlock>
            </Styles.MenuContainer>
         </Styles.Container>

      </header>
   )
}

export default Header