import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "" }: Props) => (
  <Box>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="og:site_name" content="키노라이츠" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content="오늘은 뭐 볼까?" />
      <meta name="og:description" content="무작위로 골라보자!" />
      <meta
        name="og:image"
        content="https://static.kinolights.com/logo/logo192.png"
      />
      <meta name="og:url" content="https://kinolights.com" />
    </Head>
    {children}
  </Box>
);

export default Layout;
