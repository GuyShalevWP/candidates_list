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

const CandidatesFiltter: React.FC<CandidatesFiltterProps> = ({
  candidates,
  filters,
  setFilters,
}) => {
  const positions = Array.from(new Set(candidates.map((c) => c.position)));
  const positionDisabled = !filters.name.trim();
  const statusDisabled = !filters.position;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setFilters((prev) => ({
      ...prev,
      name: value,
      position: value.trim() ? prev.position : "",
      status: value.trim() ? prev.status : "",
    }));
  };

  const handlePositionChange = (e: SelectChangeEvent) => {
    const value = e.target.value;

    setFilters((prev) => ({
      ...prev,
      position: value,
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
    <div
      style={{ display: "flex", gap: "0.5rem" }}
      className="candidates-filter-container"
    >
      <TextField
        label="Name"
        variant="outlined"
        value={filters.name}
        onChange={handleNameChange}
      />

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Position</InputLabel>
        <Select
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

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Status</InputLabel>
        <Select
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

      <TextField
        label="Experience"
        variant="outlined"
        value={filters.experienceYears}
        onChange={handleExperienceChange}
      />

      <Button
        variant="outlined"
        onClick={() => setFilters(() => initialFilter)}
      >
        Reset
      </Button>
    </div>
  );
};

export default CandidatesFiltter;
