import React, { useEffect, useState } from "react";
import CourseApi from "services/Marketing/CourseApi";
import LearningApi from "services/Marketing/LearningApi";

export const CatalogContext = React.createContext({});

const CatalogProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);

  const [catalogData, setCatalogData] = useState({
    courses: [],
    challenges: [],
    learning: [],
  });

  const fetchCatalogData = async () => {
    setIsLoading(true);
    try {
      const courseData = await CourseApi.getAll();
      const learn = await LearningApi.getWithCourse();
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

      setCatalogData({
        course,
        challenge,
        learn: learn.data.data,
      });
    } catch (error) {
      setCatalogData({
        course: [],
        challenge: [],
        learn: [],
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatalogData();
  }, []);

  return (
    <CatalogContext.Provider
      value={{ ...catalogData, isLoading, showDropDown, setShowDropDown }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export default CatalogProvider;
