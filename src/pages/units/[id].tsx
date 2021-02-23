import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import type { Unit } from '~/interfaces/unit';

const useStyles = makeStyles({
  container: {
    padding: '20px 0',
  },
  table: {
    minWidth: 375,
  },
});

type Props = {
  unit: Unit;
};

const UnitPage: NextPage<Props> = (props) => {
  const classes = useStyles();
  const { unit } = props;

  return (
    <Container className={classes.container}>
      <p>{unit.name}</p>
    </Container>
  );
};

type UnitResponse = {
  unit: Unit;
};
type UnitsResponse = {
  units: Unit[];
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST ?? ''}/units`,
  ).then<UnitsResponse>((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });

  const paths = response.units.map((unit) => ({
    params: {
      id: unit.id.toString(),
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  if (params === undefined || Array.isArray(params.id)) return { props: {} };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST ?? ''}/units/${params?.id}`,
  ).then<UnitResponse>((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });

  return {
    props: {
      unit: response.unit,
    },
  };
};

export default UnitPage;
