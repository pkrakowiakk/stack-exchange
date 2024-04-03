import { Typography } from "@mui/material";
import styles from './error.module.css'
import { TagsError } from "./interface";

const Error = ({code, name}: TagsError): JSX.Element => (
  <div className={styles.errorContainer}>
    <Typography variant="h5"> Error with code {code} occured </Typography>
    <Typography> Name: {name} </Typography>
  </div>
);


export default Error;
