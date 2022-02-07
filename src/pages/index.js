import { useEffect } from "react";

import SEO from "components/SEO";
import LandingComponent from "containers/Landing";
import { ROUTE_TITLE } from "constants/consts";
import QuizApi from "services/Marketing/QuizApi";

const LandingPage = (props) => {
  useEffect(() => {
    window.analytics.identify(localStorage.getItem("ajs_anonymous_id"));
  }, []);

  return (
    <>
      <SEO path="/" title={`${ROUTE_TITLE.HOME} | ${ROUTE_TITLE.BRAND}`} />
      <LandingComponent {...props} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data } = await QuizApi.getQuiz();
    const quizData = data?.data?.sort((a, b) => b.step - a.step);

    return {
      props: {
        quizData,
      },
    };
  } catch (error) {
    return {
      props: {
        quizData: [],
      },
    };
  }
};

export default LandingPage;
