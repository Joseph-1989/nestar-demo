import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AgentList: NextPage = () => {
  console.log("AGENTS COMPONENT - PAGES ROUTER");
  const [title, setTitle] = useState<string>("hello");

  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">AGENTS</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentList);
