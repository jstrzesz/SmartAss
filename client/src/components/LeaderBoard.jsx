import React from 'react';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const LeaderBoard = () => (
  <div>
    <h2>Leaderboard</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell>Rank</TableCell>
            <TableCell>Wins</TableCell>
            <TableCell>Losses</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  </div>
);

export default LeaderBoard;
