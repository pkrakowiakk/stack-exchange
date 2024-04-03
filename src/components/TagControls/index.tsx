import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react";

import useTagsParameters from "../../hooks/useTagsParameters"
import { TagsOrder, TagsSort } from "../../interfaces";
import { orderOptions, sortOptions } from "./options";

const TagsControls = (): JSX.Element => {
  const { parameters, setOrder, setSort, setPageSize } = useTagsParameters()
  const [ isPageSizeValid, setIsPageSizeValid ] = useState<boolean>(true);
  const [pageSizeInput, setPageSizeInput] = useState<string>("10");
  const invalidPageSizeInputs = /[e+\-.]/;

  const handleOrderChange = (event: SelectChangeEvent): void => {
    setOrder(event.target.value as TagsOrder)
  }

  const handleSortChange = (event: SelectChangeEvent): void => {
    setSort(event.target.value as TagsSort)
  }

  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => 
      setPageSizeInput(event.target.value)
  
  const isPageSizeInputValid = (value: string): boolean => 
    invalidPageSizeInputs.test(value) ||
    isNaN(Number(value)) ||
    Number(value) > 100 ||
    Number(value) <= 0

  useEffect(() => {
    if (isPageSizeInputValid(pageSizeInput)) {
        setIsPageSizeValid(false)
    }
    else {
      setIsPageSizeValid(true)
      setPageSize(pageSizeInput)
    }

  }, [pageSizeInput])

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Order</InputLabel>
        <Select
          id="orderSelect"
          value={parameters.order}
          label="Order"
          defaultValue={parameters.order}
          onChange={handleOrderChange}
        >
          {orderOptions.map((option) =>
            <MenuItem 
              key={option.label}
              value={option.value}
            >
                {option.value}
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Sort</InputLabel>
        <Select
          id="sortSelect"
          value={parameters.sort}
          label="Sort"
          defaultValue={parameters.sort}
          onChange={handleSortChange}
        >
          {sortOptions.map((option) =>
            <MenuItem 
              key={option.label}
              value={option.value}
            >
                {option.value}
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <TextField
        error={!isPageSizeValid}
        margin="none"
        inputProps={{ type: 'number' }}
        size="small"
        label="Page Size"
        value={pageSizeInput}
        onChange={handleInput}
      />
    </>
  )
}

export default TagsControls