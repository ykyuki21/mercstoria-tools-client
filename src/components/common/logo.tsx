import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = (): JSX.Element => (
  <Link href="/">
    <Image src="/images/yukimy.png" />
  </Link>
);

const Image = styled.img`
  width: 80px;
  cursor: pointer;
`;

export default Logo;
