import React from 'react';
import { TextField, FormControlLabel, Box } from '@mui/material';
import { radioData } from '../../data';
import { ReactComponent as PhoneIcon } from '../../assets/phone-icon.svg';
import { ReactComponent as MailIcon } from '../../assets/mail-icon.svg';
import { ReactComponent as GeoIcon } from '../../assets/geo-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg';
import { ReactComponent as InstIcon } from '../../assets/instagram-icon.svg';
import { ReactComponent as DiscordIcon } from '../../assets/discord-icon.svg';
import { ReactComponent as TickIcon } from '../../assets/ticktock-icon.svg';
import PlaneImg from '../../assets/plane.png';

import * as Styles from './FormBlock.styles';

const FormBlock = () => {
   const [value, setValue] = React.useState<string>('1');

   const handleChange = (value: string) => {
      setValue(value);
   };

   return (
      <Styles.Container>
         <Styles.ContactInfoBlock>
            <Styles.InfoBlockTitle variant='h2'>Contact Information</Styles.InfoBlockTitle>
            <Styles.InfoBlockSubtitle>
               Say something to start a live chat!
            </Styles.InfoBlockSubtitle>
            <Styles.InfoGroup>
               <PhoneIcon />
               <Styles.Info variant='body1'>+1012 3456 789</Styles.Info>
            </Styles.InfoGroup>
            <Styles.InfoGroup>
               <MailIcon />
               <Styles.Info variant='body1'>demo@gmail.com</Styles.Info>
            </Styles.InfoGroup>
            <Styles.InfoGroup>
               <GeoIcon />
               <Styles.Info variant='body1'>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
               </Styles.Info>
            </Styles.InfoGroup>

            <Styles.Socials>
               <Styles.Social>
                  <TwitterIcon
                     style={{
                        margin: '9px 0',
                     }}
                  />
               </Styles.Social>
               <Styles.Social>
                  <InstIcon
                     style={{
                        margin: '7px 0',
                     }}
                  />
               </Styles.Social>
               <Styles.Social>
                  <DiscordIcon
                     style={{
                        margin: '10px 0',
                     }}
                  />
               </Styles.Social>
            </Styles.Socials>
            <Styles.Elips1 />
            <Styles.Elips2 />
         </Styles.ContactInfoBlock>
         <Styles.Form>
            <Styles.InputsBlock>
               <TextField label='First Name' />
               <TextField label='Last Name' />
               <TextField label='Email' />
               <TextField label='Phone Number' />
            </Styles.InputsBlock>
            <Styles.SubjectTitle align='left' variant='h6'>
               Select Subject?
            </Styles.SubjectTitle>
            <Styles.SubjectBlock>
               <Styles.RadioGroup>
                  {radioData.map(el => (
                     <FormControlLabel
                        key={el}
                        value={el}
                        control={value === el ? <TickIcon /> : <Styles.GreyCircle />}
                        label='General Inquiry'
                        onClick={() => handleChange(el)}
                     />
                  ))}
               </Styles.RadioGroup>
            </Styles.SubjectBlock>
            <Styles.MessageTextField label='Message' placeholder='Write your message..' />
            <Styles.Button>Send Message</Styles.Button>

            <Styles.Plane alt='planeIcon' src={PlaneImg} />
         </Styles.Form>
      </Styles.Container>
   );
};

export default FormBlock;
