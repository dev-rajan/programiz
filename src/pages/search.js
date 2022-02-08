import Search from "components/Search/Search";
import SEO from "components/SEO";
import SearchApi from "services/api/SearchApi";

const SearchPage = (props) => (
  <>
    <SEO title="Search" path="/search" />
    <Search {...props} />
  </>
);

export const getServerSideProps = async ({ query }) => {
  try {
    const result = await SearchApi.getSearch(query?.q);

    return {
      props: {
        result: result.data,
      },
    };
  } catch (error) {
    return {
      props: {
        result: [],
      },
    };
  }
};

export default SearchPage;
