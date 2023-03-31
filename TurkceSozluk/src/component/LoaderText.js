import React from "react";
import Text from "./text";
import Box from "./box";

export default function LoaderText({ ...props }) {
  return <Box borderRadius="normal" bg="light" width={120} height={16} {...props} />
}
