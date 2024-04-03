import { GrNext, GrPrevious } from "react-icons/gr";
import { Typography } from "@mui/material";

import useTagsParameters from "../../hooks/useTagsParameters";
import styles from './paginaton.module.css'

const Pagination = (): JSX.Element => {
  const { parameters, setPage } = useTagsParameters();

  const handleClickPrevious = () => {
    if (parameters.page > 1) {
      setPage(parameters.page - 1)
    }
  };
  
  const handleClickNext = () => setPage(parameters.page + 1);

  return (
    <div className={styles.container}>
      <span onClick={handleClickPrevious} className={styles.pageChangeContainer}>
        <GrPrevious size={20}/>
        <Typography variant="button">Previous</Typography>
      </span>
      <Typography variant="button">{parameters.page}</Typography> 
      <span onClick={handleClickNext} className={styles.pageChangeContainer}>
        <Typography variant="button">Next</Typography>
        <GrNext size={20}/>
      </span>
    </div>
  )
}

export default Pagination;