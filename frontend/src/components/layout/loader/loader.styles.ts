import { CircularProgress } from "@mui/material";
import styled from "styled-components";


export const LoaderContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 80px);
`;

export const LoaderBorderStyle = styled(CircularProgress)(() => ({
  '& .MuiCircularProgress-circle': {
    stroke: '#0000009a',
    strokeWidth: 4,
  }
}));