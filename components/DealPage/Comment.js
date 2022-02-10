import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Comment = ({ data }) => {
  dayjs.extend(relativeTime);
  const [activeButton, setActiveButton] = useState(false);

  return (
    <div className="mt-4">
      <div className="flex flex-row">
        <Box
          borderRadius="50%"
          bg="#e6e7e8"
          w={10}
          h={10}
          fontWeight="700"
          className="flex justify-center items-center"
        >
          <div className="">{data.name.slice(0, 1)}</div>
        </Box>
        <div className="flex flex-col ml-3">
          <div className="flex flex-row">
            <div className="font-bold mr-1">{data.name}</div>
            {data.topReviewer && (
              <div className="flex flex-row">
                •
                <div className="bg-purple p-1 text-white w-max text-xs font-medium rounded-md ml-1">
                  Top Reviewer
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-row text-sm">
            <div>{data.numberOfRatings} Oceny</div>
            <div>{data.reviews} reviews</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-2 items-center">
        <div>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                boxSize={3.5}
                key={i}
                margin={0.5}
                color={i < data.rating ? "gold" : "gray.300"}
              />
            ))}
        </div>
        <div className="text-sm">• {dayjs(data.date).fromNow()}</div>
      </div>
      <div>{data.content}</div>
      <Button
        variant="outline"
        size="xs"
        className="mt-3"
        bg={activeButton ? "gold" : ""}
        onClick={() => setActiveButton(!activeButton)}
      >
        Pomocna?
      </Button>
    </div>
  );
};

export default Comment;
