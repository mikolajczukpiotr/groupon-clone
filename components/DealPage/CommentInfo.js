import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Select } from "@chakra-ui/react";
import { SuccesIcon } from "../Icons";

const CommentInfo = ({ data }) => {
  return (
    <div>
      <div className="mt-7 text-2xl font-bold">Komentarze</div>
      <div className="flex justify-between">
        <div className="flex flex-row">
          <div className="text-4xl font-bold my-2 flex ">
            {data.commentsMetaInfo.rating}
          </div>
          <div className="flex flex-col m-1">
            <div>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    boxSize={5}
                    key={i}
                    margin={0.5}
                    color={
                      i < data.commentsMetaInfo.rating ? "gold" : "gray.300"
                    }
                  />
                ))}
            </div>
            <div className="text-sm">
              {data.commentsMetaInfo.numberOfRatings} Opinii
            </div>
          </div>
        </div>
        <div className=" flex items-center">
          <div className="mr-3">Sortuj wg:</div>
          <div>
            <Select placeholder="Najlepsze dopasowanie">
              <option value="option1"></option>
              <option value="option2">Najnowsze</option>
              <option value="option3">Najwyżej oceniane</option>
            </Select>
          </div>
        </div>
      </div>
      <Box
        bg="#f6f7f8"
        padding="15px 16px"
        borderRadius="lg"
        className="flex flex-row mt-7"
      >
        <SuccesIcon w={12} h={12} />
        <div className="ml-3">
          <div className="font-bold">100% Sprawdzonych Recenzji</div>
          <div className="text-sm">
            Wszystkie recenzje pochodzą od osób, które skorzystały z ofert tego
            partnera.
          </div>
        </div>
      </Box>
    </div>
  );
};

export default CommentInfo;
