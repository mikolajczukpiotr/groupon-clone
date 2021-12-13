import React from "react";
import { Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
const UpIcon = (props) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <path
      fill="rgba(102,80,215,1.0)"
      d="M15.38 2.51l-6.02 1.5a.5.5 0 0 0-.23.85l1.37 1.37-2.52 2.52-2.33-2.33a.25.25 0 0 0-.36 0L.07 11.64c-.1.1-.1.26 0 .36L1.5 13.4c.05.05.11.08.18.08.06 0 .13-.03.18-.08L5.47 9.8l2.33 2.33c.1.1.26.1.36 0L12.27 8l1.37 1.37a.5.5 0 0 0 .84-.23l1.5-6.02a.5.5 0 0 0-.6-.6z"
    />
  </Icon>
);
const PopularIcon = (props) => (
    <Icon viewBox="0 1 16 16" {...props}>
        <path
            fill="rgba(102,80,215,1.0)"
            d="M8.8 13.57h2.43V15H4.77v-1.43h2.7v-2.01a4.39 4.39 0 0 1-3.81-2.7C2.4 8.54 1 7.66 1 5.66V3h2.42V1h8.89v2H15v2.67c0 2.15-1.64 3-2.95 3.25a4.33 4.33 0 0 1-3.24 2.56v2.1zM3.43 4.33H2.26v1.34c0 .96.57 1.46 1.16 1.72V4.33zm8.89 3.15c.68-.22 1.43-.72 1.43-1.81V4.33h-1.43v3.15z"
        />
    </Icon>
);

const Type = ({ type }) => {
  const iconMap = {
    best: (
      <Box className="text-purple">
        <UpIcon className="mr-1" /> Popularny
      </Box>
    ),
    popular: <Box className="text-purple">
        <PopularIcon className="mr-1" /> Najlepsze z Groupon
    </Box>,
  };

  return (
    <div display="flex" alignItems="center">
      {iconMap.[type]}
    </div>
  );
};

export default Type;
