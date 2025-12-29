import BreadcumbFive from "~/sections/Checkout/BreadcumbFive";
import CheckoutArea from "~/sections/Checkout/CheckoutArea";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";
export default function CheckoutPage() {
  return (
    <>
      <HeaderOne />
      <BreadcumbFive />
      <CheckoutArea />
      <FooterFive/>
      <Scroll />
    </>
  );
}
