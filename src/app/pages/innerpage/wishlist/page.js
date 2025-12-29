import BreadcumbFifteen from "~/sections/Wishlist/BreadcumbFifteen";
import Wishlist from "~/sections/Wishlist/Wishlist";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";
export default function WishlistPage() {
    return (
        <div>
            <HeaderOne />
            <BreadcumbFifteen />
            <Wishlist />
            <FooterTwo />
            <Scroll />
        </div>
    );
}