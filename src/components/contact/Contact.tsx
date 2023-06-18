import { Typography } from "@mui/material"
import * as Styles from './Contact.styles.tsx'
import FormBlock from "../form/FormBlock.tsx"

const Contact = () => {
  return (
    <Styles.Container>
      <Styles.Title variant="h1">Contact Us</Styles.Title>
      <Styles.Subtitle variant="subtitle1">
        Any question or remarks?
        Just write us a message!</Styles.Subtitle>
        <FormBlock />
    </Styles.Container>
  )
}

export default Contact