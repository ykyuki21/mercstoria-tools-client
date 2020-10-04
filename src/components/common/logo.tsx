import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/images/yukimy.png" />
    </Link>
  );
}

const Image = styled.img`
  width: 80px;
  cursor: pointer;
`;
