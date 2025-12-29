import dynamic from "next/dynamic";
import BreadcumbFifteen from "~/sections/Wishlist/BreadcumbFifteen";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";

// THIS IS THE KEY: Force the page to skip static generation
export const dynamic = "force-dynamic";

const Wishlist = dynamic(() => import("~/sections/Wishlist/Wishlist"), {
    ssr: false,
});

export default function WishlistPage() {
    return (
        <main>
            <HeaderOne />
            <BreadcumbFifteen />
            <Wishlist /> 
            <FooterFive /> 
            <Scroll />
        </main>
    );
}