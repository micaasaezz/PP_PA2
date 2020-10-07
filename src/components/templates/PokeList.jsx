import React from 'react';
import '../styles/PokeStyles.css';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../atoms/Title';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function PokeList({ pokemons, previous, next, count, handleOnClick, rowsPerPage, handleChangeRowsPerPage }) {

  return (
    <div>
      {
        (Array.isArray(pokemons) && pokemons.length > 0)
        && <>
          {/* <Title title={"Cantidad:" + count} /> */}
          <Title title={"Poke names:"} />
          <div className={"poke-table"}>
            <TableContainer>
              <Table size="small" aria-label="simple table">
                {/* <TableHead>
                  <TableRow>
                    <TableCell className={"poke-table-titles"}>Pokes</TableCell>
                    <TableCell className={"poke-table-titles"} align="right">Details</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  {
                    pokemons.map((currElement, index) => {
                      return (
                        <TableRow key={currElement.name}>
                          <TableCell scope="row" className={"poke-table-body"}>
                            {index + 1} - {currElement.name}
                          </TableCell>
                          <TableCell align="right" className={"poke-table-body"}>
                            <Button
                              variant="contained"
                              color="primary"
                              href={"/detalle/" + currElement.url.split('/')[6]}
                              size="small"
                            >
                              DETAILS
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={"items-per-page"}> 
            <label style={{ marginRight: "10px" }}>Items por página:</label> 
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </div>
          <div>
            {
              previous !== null
              && <Button
                variant="contained"
                color="primary"
                onClick={() => handleOnClick(previous)}
                className={next ? "route-buttons-style" : "previous-button-style"}
              >
                PREVIOUS
              </Button>
            }
            {
              next !== null
              && <Button
                variant="contained"
                color="primary"
                onClick={() => handleOnClick(next)}
                className={previous ? "route-buttons-style" : "next-button-style"}
              >
                NEXT
              </Button>
            }
          </div>
        </>
      }
    </div>
  )
}

