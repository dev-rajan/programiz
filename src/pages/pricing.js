import SEO from "components/SEO";
import SubscriptionApi from "services/api/SubscriptionApi";
import PricingComponent from "../containers/Pricing";

const PricingPage = (props) => (
  <>
    <SEO path="/pricing" title="Pricing" />
    <PricingComponent {...props} />
  </>
);

export const getServerSideProps = async () => {
  try {
    const { data } = await SubscriptionApi.get();

    const subscriptions = data.data.splice(0, 2);

    return {
      props: {
        subscriptions,
      },
    };
  } catch (error) {
    return {
      props: {
        subscriptions: [],
      },
    };
  }
};

export default PricingPage;
