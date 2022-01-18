import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import SEO from "components/SEO";
import LearningApi from "services/api/LearningApi";
import LearnComponent from "containers/Learn";
import { CUSTOM_LEARNING_PATH_DATA } from "constants/consts";

const LearningPage = (props) => {
  const router = useRouter();
  const [customData, setCustomData] = useState("");

  const fetchData = async () => {
    await fetch("/data/learn/" + props.slug[0] + ".json", { mode: "no-cors" })
      .then((response) => response.json())
      .then((data) => setCustomData(data));
  };

  useEffect(() => {
    fetchData();
  }, [props.slug]);

  return (
    <>
      <SEO
        path={`/learning/${props.slug}`}
        title={`${
          router.query.slug[0] == CUSTOM_LEARNING_PATH_DATA.PYTHON_JOB_READY ||
          router.query.slug[0] == CUSTOM_LEARNING_PATH_DATA.C_JOB_READY
            ? customData?.data?.title
            : props?.slugData?.data?.title
        } | Learning Path`}
      />
      <LearnComponent
        {...props}
        custom={
          router.query.slug[0] == CUSTOM_LEARNING_PATH_DATA.PYTHON_JOB_READY ||
          router.query.slug[0] == CUSTOM_LEARNING_PATH_DATA.C_JOB_READY
            ? customData
            : props?.slugData
        }
        details={
          router.query.slug[0] == CUSTOM_LEARNING_PATH_DATA.PYTHON_JOB_READY ||
          router.query.slug[0] == CUSTOM_LEARNING_PATH_DATA.C_JOB_READY
            ? customData
            : ""
        }
        slugData={props.slugData}
      />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  try {
    const slugData = await LearningApi.getLearnSlug(slug);
    const recommended = await LearningApi.getRecommended();

    return {
      props: {
        slug,
        slugData: slugData.data,
        recommended: recommended.data,
        footerClass: "footer-padding",
      },
    };
  } catch (error) {
    return {
      props: {
        slug,
        slugData: [],
        recommended: [],
        footerClass: "footer-padding",
      },
    };
  }
};

export default LearningPage;
