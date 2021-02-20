import React from "react";
import { NextPage, GetStaticProps } from "next";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import type { Unit, Element } from "~/interfaces/unit";
import styled, { css } from "styled-components";

const useStyles = makeStyles({
  container: {
    padding: "20px 0",
  },
  table: {
    minWidth: 375,
  },
});

type Props = {
  units: Unit[];
};

const Units: NextPage<Props> = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" padding="checkbox">
                所持
              </TableCell>
              <TableCell align="center" padding="checkbox">
                武器
              </TableCell>
              <TableCell align="center" padding="checkbox">
                レア
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">DPS</TableCell>
              <TableCell align="right">Rune</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.units.map((unit) => (
              <StyledTableRow key={unit.id} element={unit.element}>
                <TableCell align="center" padding="checkbox">
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </TableCell>
                <TableCell align="center" padding="checkbox">
                  {unit.weapon}
                </TableCell>
                <TableCell align="center" padding="checkbox">
                  {unit.rarity}
                </TableCell>
                <TableCell component="th" scope="row">
                  {unit.name}
                </TableCell>
                <TableCell align="right">{unit.element}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const StyledTableRow = styled(TableRow)<{ element: Element }>`
  ${({ element }) => {

    switch (element) {
      case "fire":
        return css`
          background-color: red;
        `
      default:
        return css`
          background-color: blue;
        `
      }
  }}
`

type UnitResponse = {
  units: Unit[];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_HOST + "/units"
  ).then<UnitResponse>((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });

  return {
    props: {
      units: response.units,
    },
  };
};

export default Units;
