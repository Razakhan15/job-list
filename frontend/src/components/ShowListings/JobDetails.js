import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { useParams } from "react-router-dom";
import CmpProvidedDtls from "./CmpProvidedDtls";
import axios from "../../baseurl/axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header from "../Header";

const JobDetails = () => {
  let { id } = useParams();
  const [detail, setDetail] = useState([]);
  console.log(detail)
  const [loading, setLoading] = useState(true);

  async function displayDetail() {
    try {
      const res = await axios.get("/job/detail/" + id);
      // console.log(res)
      setDetail(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    displayDetail();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClimbingBoxLoader color="#50C878" />
        </div>
      ) : (
        <>
          <Header />
          <p className="text-center text-4xl font-semibold mt-10">
            {detail?.profile}{" "}
            {detail?.city
              ? "Internship in" + detail?.city
              : "work from home internship"}{" "}
            at {detail.cmp?.name}
          </p>
          <div className="w-3/4 m-auto border mt-10 p-8">
            <ListingCard
              key={detail.id}
              id={detail.id}
              title={detail?.profile}
              company={detail.cmp?.name}
              tags={detail.tags}
              type={detail.type}
              partfull={detail?.period}
              duration={detail?.duration}
              openings={detail.openings}
              location={detail.location}
              description={detail.description}
              stipend={detail?.stipend}
              perks={detail.perks}
              availability={detail?.ppo}
            />
            <CmpProvidedDtls
              company={detail.cmp?.name}
              description={detail.cmp?.description}
              created_at={detail.created_at}
              responsibilites={detail?.responsibilites}
              skills={detail?.skills}
              perks={detail?.perks}
              openings={detail?.no_openings}
            />
          </div>
        </>
      )}
    </>
  );
};

export default JobDetails;
