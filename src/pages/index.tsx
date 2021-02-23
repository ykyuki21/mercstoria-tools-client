import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home = (): JSX.Element => (
  <>
    <Title>My page</Title>
    <Button variant="contained" color="primary">
      button
    </Button>
  </>
);

export default Home;
