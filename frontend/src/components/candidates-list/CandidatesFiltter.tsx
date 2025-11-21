import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { CandidatesFiltterProps } from "../../types/Filter";
import { Status } from "../../types/Candidates";
import { initialFilter } from "../../utils/filterUtils";

const CandidatesFiltter: React.FC<CandidatesFiltterProps> = ({ candidates, filters, setFilters }) => {
  const positions = Array.from(new Set(candidates.map((c) => c.position)));

  const positionDisabled = !filters.name.trim();
  const statusDisabled = !filters.position;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setFilters((prev) => ({
      ...prev,
      name: value,
      // When name becomes empty: 
      // Reset position and status filters
      position: value.trim() ? prev.position : "",
      status: value.trim() ? prev.status : "",
    }));
  };

  const handlePositionChange = (e: SelectChangeEvent) => {
    const value = e.target.value;

    setFilters((prev) => ({
      ...prev,
      position: value,
      // When position is cleared: 
      // Reset status
      status: value ? prev.status : "",
    }));
  };

  const handleStatusChange = (e: SelectChangeEvent) => {
    const value = e.target.value;

    setFilters((prev) => ({
      ...prev,
      status: value,
    }));
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      experienceYears: value,
    }));
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem"}} className="candidates-filter-container">
      {/* Name filter input */}
      <TextField 
        label="Name" 
        variant="outlined" 
        value={filters.name}
        onChange={handleNameChange} 
      />

      {/* Positions filter select */}
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-disabled-label">Position</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          label="Position"
          value={filters.position}
          onChange={handlePositionChange}
          disabled={positionDisabled}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {positions.map((position) => (
            <MenuItem key={position} value={position}>
              {position}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Status filter select */}
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-disabled-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          label="Status"
          value={filters.status}
          onChange={handleStatusChange}
          disabled={statusDisabled}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={Status.NEW}>{Status.NEW}</MenuItem>
          <MenuItem value={Status.INTERVIEW}>{Status.INTERVIEW}</MenuItem>
          <MenuItem value={Status.HIRED}>{Status.HIRED}</MenuItem>
        </Select>
      </FormControl>
      
      {/* Experience filter input */}
      <TextField 
        label="Experience"
        variant="outlined"
        value={filters.experienceYears}
        onChange={handleExperienceChange}
      />

      {/* Reset filters button */}
      <Button variant="outlined" onClick={() => setFilters(() =>(initialFilter))}>Reset</Button>
    </div>
  );
};

export default CandidatesFiltter;
