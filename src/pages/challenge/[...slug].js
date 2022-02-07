import { useEffect, useState } from "react";

import SEO from "components/SEO";
import ChallengeComponent from "containers/Challenge";
import { data } from "containers/Challenge/components/Code/Data";
import CourseApi from "services/Marketing/CourseApi";

const ChallengePage = (props) => {
  const [customData, setCustomData] = useState("");

  const fetchData = async () => {
    await fetch("/data/course/" + props.slug[0] + ".json", { mode: "no-cors" })
      .then((response) => response.json())
      .then((data) => setCustomData(data));
  };

  useEffect(() => {
    fetchData();
  }, [props.slug]);

  return (
    <>
      <SEO path="/challenge" title="Challenge" />
      <ChallengeComponent {...props} custom={customData} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  const challengeData = [data, { ...data, step: 2 }, { ...data, step: 3 }];

  try {
    const recommended = await CourseApi.getRecommended();

    return {
      props: {
        slug,
        challengeData,
        recommended: recommended.data,
        footerClass: "footer-padding",
      },
    };
  } catch (error) {
    return {
      props: {
        slug,
        challengeData,
        recommended: [],
        footerClass: "footer-padding",
      },
    };
  }
};

export default ChallengePage;
