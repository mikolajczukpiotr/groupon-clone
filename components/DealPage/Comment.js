import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CommentIcon, LikeIcon, RatingIcon } from "../Icons";
import { StarIcon } from "@chakra-ui/icons";

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
              <div className="flex flex-row m-0.5">
                •
                <div className="bg-purple p-1 text-white w-max text-xs font-medium rounded-md ml-1">
                  Top Reviewer
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-row text-sm text-gray-500 ">
            <div className="flex ite">
              <div className="mr-1">
                <RatingIcon />
              </div>
              {data.numberOfRatings} Oceny
            </div>
            <div>
              <CommentIcon margin="1" />
              {data.reviews} reviews
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-1.5 items-center">
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
        className="mt-3 items-center"
        bg={activeButton ? "yellow.300" : ""}
        onClick={() => setActiveButton(!activeButton)}
      >
        <div className="items-center flex">
          <LikeIcon />
          <div className="ml-1 font-light text-gray-500">Pomocna?</div>
        </div>
      </Button>
    </div>
  );
};

export default Comment;
