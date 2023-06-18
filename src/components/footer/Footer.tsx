import React from 'react';
import { ReactComponent as PhoneIcon } from '../../assets/phone-icon.svg';
import { ReactComponent as MailIcon } from '../../assets/mail-icon.svg';
import { ReactComponent as GeoIcon } from '../../assets/geo-icon.svg';
import * as Styles from './Footer.styles';
import { footerData } from '../../data';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Styles.Container>
      <Styles.LogoTypography>Logo Here</Styles.LogoTypography>
      <Styles.Content>
        <Styles.ReachUsBlock>
          <Styles.ReachUsTitle align='left'>Reach us</Styles.ReachUsTitle>
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
        </Styles.ReachUsBlock>
        {footerData.map(block => (
          <Styles.Block key={block.title}>
            <Styles.Title>{block.title}</Styles.Title>
            {block.items.map(el => (
              <Styles.Item key={el}>{el}</Styles.Item>
            ))}
          </Styles.Block>
        ))}
        <Styles.JoinBlock>
          <Styles.JoinTitle align='left'>Join Our Newsletter</Styles.JoinTitle>
          <Styles.SubscribeFormBlock>
            <Styles.SubscribeBlock>
              <Styles.TextField placeholder='Your email address' variant='outlined' />
              <Styles.Button>Subscribe</Styles.Button>
            </Styles.SubscribeBlock>
            <Styles.JoinSubtitle align='left'>
              * Will send you weekly updates for your better tool management.
            </Styles.JoinSubtitle>
          </Styles.SubscribeFormBlock>
        </Styles.JoinBlock>
      </Styles.Content>

    </Styles.Container>
  );
};

export default Footer;
