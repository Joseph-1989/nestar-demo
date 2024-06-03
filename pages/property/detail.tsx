import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  console.log("DETAIL COMPONENT - PAGES ROUTER");
  return <Container>PROPERTY DETAIL</Container>;
};

export default withLayoutBasic(PropertyDetail);
