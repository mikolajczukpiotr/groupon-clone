import React from "react";
import { Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

const Type = ({ type }) => {
  const UpIcon = (props) => (
    <Icon viewBox="0 0 16 16" {...props}>
      <path
        fill="rgba(102,80,215,1.0)"
        d="M15.38 2.51l-6.02 1.5a.5.5 0 0 0-.23.85l1.37 1.37-2.52 2.52-2.33-2.33a.25.25 0 0 0-.36 0L.07 11.64c-.1.1-.1.26 0 .36L1.5 13.4c.05.05.11.08.18.08.06 0 .13-.03.18-.08L5.47 9.8l2.33 2.33c.1.1.26.1.36 0L12.27 8l1.37 1.37a.5.5 0 0 0 .84-.23l1.5-6.02a.5.5 0 0 0-.6-.6z"
      />
    </Icon>
  );
  return (
    <Box display="flex" alignItems="center">
      {type == "best" ? <UpIcon className="mr-1" /> : null}
      {type == "best" ? <Box textColor="#7561DB">Popularny</Box> : null}
    </Box>
  );
};

export default Type;
