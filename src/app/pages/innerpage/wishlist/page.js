// 1. Rename the import to 'nextDynamic' to avoid the collision
import nextDynamic from "next/dynamic"; 
import BreadcumbFifteen from "~/sections/Wishlist/BreadcumbFifteen";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";

// 2. This 'dynamic' is a reserved Next.js keyword for route config
export const dynamic = "force-dynamic";

// 3. Use the renamed import here
const Wishlist = nextDynamic(() => import("~/sections/Wishlist/Wishlist"), {
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