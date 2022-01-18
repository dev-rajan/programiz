import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import SEO from "components/SEO";
import CourseApi from "services/api/CourseApi";
import CourseComponent from "containers/Course";
import Challenge from "containers/Challenge";
import {
  CUSTOM_COURSE_DATA,
  C_CHALLENGE_IDS,
  FANCY_CARD_DATA,
  PYTHON_CHALLENGE_IDS,
} from "constants/consts";

const CoursePage = (props) => {
  const router = useRouter();

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
      <SEO
        path={`/courses/${props.slug}`}
        title={`${
          router.query.slug[0] == CUSTOM_COURSE_DATA.PYTHON ||
          router.query.slug[0] == CUSTOM_COURSE_DATA.C
            ? customData?.data?.title
            : props?.slugData?.data?.title
        } | Course`}
      />

      {props.isChallenge ? (
        <Challenge
          {...props}
          recommended={props.recommended}
          custom={props?.slugData}
          customText={FANCY_CARD_DATA}
          challengeData={props.challengeData}
        />
      ) : (
        <CourseComponent
          {...props}
          custom={customData}
          details={
            router.query.slug[0] == CUSTOM_COURSE_DATA.PYTHON ||
            router.query.slug[0] == CUSTOM_COURSE_DATA.C
              ? customData
              : props?.slugData
          }
        />
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  try {
    const slugData = await CourseApi.getCourseSlug(slug);
    const recommended = await CourseApi.getRecommended();

    const isChallenge = slug.join("").toLowerCase().includes("challenge");

    let challengeData = [];
    let toc = null;

    if (isChallenge) {
      const isPython = slug.join("").toLowerCase().includes("python");
      const isC = slug.join("").toLowerCase().includes("c-programming");

      let fetchIds = isPython ? PYTHON_CHALLENGE_IDS : [];

      fetchIds = isC ? C_CHALLENGE_IDS : fetchIds;

      challengeData = await Promise.all(
        fetchIds.map(async (id) => {
          const { data } = await CourseApi.getSection(id);

          return data?.data?.[0];
        })
      );
    } else {
      toc = await CourseApi.getCourseToc(slugData.data.data.id);
    }

    return {
      props: {
        slug,
        challengeData,
        isChallenge,
        slugData: slugData.data,
        toc: toc?.data ?? {},
        recommended: recommended.data,
        footerClass: "footer-padding",
      },
    };
  } catch (error) {
    return {
      props: {
        slug,
        challengeData: [],
        slugData: [],
        toc: [],
        recommended: [],
        footerClass: "footer-padding",
      },
    };
  }
};

export default CoursePage;
