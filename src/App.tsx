import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import useTagsParameters from './hooks/useTagsParameters';
import TagsControls from './components/TagControls';
import Pagination from './components/Pagination';
import TagTable from './components/TagTable';
import { getTags } from './services/tags';
import { TagDetails } from './interfaces';
import useTags from './hooks/useTags';
import Error from './components/Error';
import styles from './app.module.css'

function App(): JSX.Element {
  const { parameters } = useTagsParameters();
  const { setTags } = useTags()

  const handleGetTags = () => getTags(parameters).then((response) => 
    response.data.items as Array<TagDetails>)

  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["tags", { parameters }],
    queryFn: handleGetTags,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      setTags(data)
    }
  }, [data])

  return (
    <div className={styles.baseContainer}>
      <section className={styles.controlsContainer}>
        <TagsControls/>
      </section>
      <section className={styles.tableContainer}>
        {isFetching 
          ? <CircularProgress size={40}/>
          : isError 
            ?
              <Error
                code={error.response.status}
                name={error.response.data.error_name}
              />
            : <TagTable/>}
      </section>
      <section className={styles.paginationContainer}>
        <Pagination/>
      </section>
    </div>
  )
}

export default App