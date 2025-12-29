import BreadcumbEleven from "~/sections/Shop/BreadcumbEleven";
import Product from "~/sections/Shop/Product";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";
export default function ShopPage() {
    return (
        <div>
            <HeaderOne />
            <BreadcumbEleven />
            <Product />
            <FooterFive />
            <Scroll />
        </div>
    );
}