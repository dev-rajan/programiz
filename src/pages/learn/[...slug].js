import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import SEO from "components/SEO";
import LearningApi from "services/Marketing/LearningApi";
import LearnComponent from "containers/Learn";
import { CUSTOM_LEARNING_PATH_DATA } from "constants/consts";
import PageNotFound from "pages/404";
import CourseApi from "services/Marketing/CourseApi";

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

  if (!props?.slugData?.data || props?.slugData?.data?.length < 1) {
    return <PageNotFound />;
  }

  return (
    <>
      <SEO
        path={`/learn/${props.slug}`}
        title={`${
          customData
            ? props?.slugData?.data?.title
            : props?.slugData?.data?.title
        }`}
      />

      <LearnComponent
        {...props}
        custom={customData}
        details={props.slugData}
        slugData={props?.slugData}
        toc={props.lessonData}
      />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  try {
    const slugData = await LearningApi.getLearnSlug(slug);
    const recommended = await LearningApi.getRecommended();
    const lessonCourses = slugData?.data?.data?.levels
      ?.map((a) => a.courses)
      .flat();
    const toc = await Promise.all(
      lessonCourses.map(async ({ id, ...rest }) => {
        const { data } = await CourseApi.getCourseToc(id);

        return { ...data.data, ...rest };
      })
    );

    return {
      props: {
        slug,
        slugData: slugData.data,
        recommended: recommended.data,
        footerClass: "footer-padding",
        lessonData: toc,
      },
    };
  } catch (error) {
    return {
      props: {
        slug,
        slugData: [],
        recommended: [],
        footerClass: "footer-padding",
        lessonData: [],
      },
    };
  }
};

export default LearningPage;
