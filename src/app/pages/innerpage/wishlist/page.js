import nextDynamic from "next/dynamic"; 
import BreadcumbFifteen from "~/sections/Wishlist/BreadcumbFifteen";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";

// This tells Vercel: "Do not attempt to pre-render this page into HTML"
export const dynamic = "force-dynamic";

// Rename this to WishlistSection to prevent variable clashing
const WishlistSection = nextDynamic(() => import("~/sections/Wishlist/Wishlist"), {
    ssr: false,
});

export default function WishlistPage() {
    return (
        <main>
            <HeaderOne />
            <BreadcumbFifteen />
            {/* Use the renamed component */}
            <WishlistSection /> 
            <FooterFive /> 
            <Scroll />
        </main>
    );
}