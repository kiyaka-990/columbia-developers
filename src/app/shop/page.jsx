import Product from "../../sections/Shop/Product/Product";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import Scroll from "~/sections/Common/Scroll";

export default function ShopPage() {
    return (
        <main>
            <HeaderOne />
            {/* This pulls in your component from the sections folder */}
            <Product /> 
            <FooterFive />
            <Scroll />
        </main>
    );
}