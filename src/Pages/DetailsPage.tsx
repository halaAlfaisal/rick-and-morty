import React from "react";
import { useParams } from "react-router-dom";
import {GET_CHARACTER_DETAILS} from "../graphql";
import {useDetails} from "../useRequest";

const DetailsPage: React.FC = () => {
  const params = useParams();
  const { loading, data } = useDetails(GET_CHARACTER_DETAILS, params.id);
  console.log(data, "data");
  if (loading || !data) return <></>;

  const results = data.character;

  return <h1>details {params.id} {results.name}</h1>;
};

export default DetailsPage;
