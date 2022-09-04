import type { NextPage } from "next";
import React from "react";
import { LayoutContainer } from "./style";
import { Nav } from './../Nav/index';

interface LayoutProps {
  children : React.ReactElement | any
}

export const Layout: NextPage<LayoutProps> = ({children}) => {
  return <LayoutContainer><Nav />{children}</LayoutContainer>;
};
