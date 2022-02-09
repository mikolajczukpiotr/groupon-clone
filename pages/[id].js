import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../services/fetch";
import CustomAlert from "../components/CustomAlert";
import Loading from "../components/Loading";
import Type from "../components/DealCard/Type";
import Rating from "../components/DealCard/Rating";
import Address from "../components/DealCard/Address";
import Slider from "../components/ImageSlider/Slider";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Select,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { SuccesIcon } from "../components/Icons";

const DealSite = () => {
  const { query } = useRouter();
  const { id } = query;
  const { data, error } = useSWR(`/api/deals/${id}`, fetcher);
  if (error) return <CustomAlert alertMessage={"Coś poszło nie tak!  :("} />;
  if (!data) return <Loading />;
  return (
    <div className="m-6 w-7/12">
      <Type type={data.type} />
      <div className="flex ">
        <div className="text-3xl font-bold mr-2">{data.title}</div>
        <Rating rating={data.rating} />
      </div>
      <div className="mt-1">
        <Address address={data.address} />
      </div>
      <div className="my-1">{data.shortDescription}</div>
      <div className="my-2 ">
        <Slider data={data.gallery} />
      </div>
      {data.alert && (
        <div className="my-14">
          <Alert status="info" borderRadius="lg">
            <AlertIcon />
            <AlertDescription montSize="sm">{data.alert}</AlertDescription>
          </Alert>
        </div>
      )}
      <div className="font-bold text-2xl my-2">Wyrózniki</div>
      <div>{data.discriminate}</div>
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
        className="flex flex-row"
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

export default DealSite;
