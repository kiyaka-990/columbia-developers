import BreadcumbFour from "~/sections/Cart/BreadcumbFour";
import CartArea from "~/sections/Cart/CartArea";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";
export default function CartPage() {
  return (
    <div>
      <HeaderOne />
      <BreadcumbFour />
      <CartArea />
      <FooterFive />
      <Scroll />
    </div>
  );
}
