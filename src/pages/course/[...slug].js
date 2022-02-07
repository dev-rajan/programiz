import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import SEO from "components/SEO";
import CourseApi from "services/Marketing/CourseApi";
import CourseComponent from "containers/Course";
import Challenge from "containers/Challenge";
import ChallengeApi from "services/Marketing/ChallengeApi";
import PageNotFound from "pages/404";

import {
  CHALLENGE_SLUGS,
  CUSTOM_CHALLENGE_DATA,
  CUSTOM_COURSE_DATA,
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

  if (!props?.slugData?.data || props?.slugData?.data?.length < 1) {
    return <PageNotFound />;
  }

  return (
    <>
      <SEO
        path={`/courses/${props.slug}`}
        title={`${
          customData
            ? props?.slugData?.data?.title
            : props?.slugData?.data?.title
        }`}
      />

      {props.isChallenge ? (
        <Challenge
          {...props}
          slugData={props?.slugData}
          recommended={props.recommended}
          custom={customData}
          challengeData={props.challengeData}
          details={props?.slugData}
        />
      ) : (
        <CourseComponent
          {...props}
          custom={customData}
          slugData={props?.slugData}
          details={props?.slugData}
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
    const challengeData = await ChallengeApi.getChallengeBySlug(slug);
    const isChallenge = challengeData?.data?.data?.length;

    let toc = null;

    if (!isChallenge) {
      toc = await CourseApi.getCourseToc(slugData.data.data.id);
    }

    return {
      props: {
        slug,
        challengeData: challengeData.data.data,
        isChallenge,
        slugData: slugData.data,
        toc: toc?.data ?? {},
        recommended: recommended.data,
        footerClass: "footer-padding",
      },
    };
  } catch (error) {
    console.log(error);

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
