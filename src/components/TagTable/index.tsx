import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Paper,TableContainer} from "@mui/material";

import { TagDetails } from "../../interfaces";
import useTags from "../../hooks/useTags";

const TagTable = (): JSX.Element => {
  const { tags } = useTags()

  const tableColumns: GridColDef[] = [
    { 
      field: 'name',
      headerName: 'Tag Name',
      width: 325, 
      headerAlign: 'center',
      align: 'center' 
    },
    { field: 'count',
      headerName: 'Pole count',
      width: 325,
      headerAlign: 'center',
      align: 'center'
    },
  ];
 
  return (
    <TableContainer component={Paper} sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={tags}
        columns={tableColumns}
        getRowId={(row: TagDetails) => row.name}
        checkboxSelection
        hideFooter={true}
      />
    </TableContainer>
  )
}

export default TagTable;