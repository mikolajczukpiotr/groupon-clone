import React from "react";
import { useRouter } from "next/router";

const DealSite = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p></p>;
};

export default DealSite;
