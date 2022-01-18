/**
 * Gets base url for course images.
 *
 * @param {*} courseTitle
 * @returns {string}
 */
export const getCdnBaseUrlForCourse = (courseTitle) => {
  const url = courseTitle?.replaceAll(" ", "-").toLowerCase() || "";
  const baseUrl = `${CDN_BASE_URL}/course-images/${url}`;

  return baseUrl;
};

/**
 * Returns true if the given object is empty.
 *
 * @param {*} obj
 * @returns {boolean}
 */
export const isObjectEmpty = (obj) => {
  return !Object.keys(obj).length;
};
