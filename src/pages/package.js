import SEO from "components/SEO";

import CourseApi from "services/api/CourseApi";
import LearningApi from "services/api/LearningApi";

import PackageComponent from "../containers/Package";

const PackagePage = (props) => {
  return (
    <>
      <SEO path="/package" title="All Courses" />
      <PackageComponent {...props} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const courseData = await CourseApi.getAll();
    const learn = await LearningApi.getAll();
    const challenge = [];
    const course = [];

    courseData?.data?.data?.forEach((item) => {
      if (
        Object.values(item.title).join("").toLowerCase().includes("challenge")
      ) {
        challenge.push(item);
      } else {
        course.push(item);
      }
    });

    return {
      props: {
        course,
        challenge,
        learn: learn.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        course: [],
        learn: [],
        challenge: [],
      },
    };
  }
};

export default PackagePage;
