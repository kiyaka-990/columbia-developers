import CheckoutArea from "../../sections/Checkout/CheckoutArea/CheckoutArea";
import BreadcumbFive from "~/sections/Checkout/BreadcumbFive";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";

export default function Page() {
    return (
        <main>
            <HeaderOne />
            <BreadcumbFive />
            <CheckoutArea />
            <FooterFive />
            <Scroll />
        </main>
    );
}