import dynamic from "next/dynamic";
import BreadcumbFifteen from "~/sections/Wishlist/BreadcumbFifteen";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";

// This tells Next.js: "Do not try to render this on the server"
const Wishlist = dynamic(() => import("~/sections/Wishlist/Wishlist"), {
    ssr: false,
    loading: () => <div className="container p-5 text-center">Loading Wishlist...</div>
});

export default function WishlistPage() {
    return (
        <div>
            <HeaderOne />
            <BreadcumbFifteen />
            {/* The dynamic component now safe for Vercel builds */}
            <Wishlist /> 
            
            {/* Fixed: Changed FooterTwo to FooterFive to match your import */}
            <FooterFive /> 
            
            <Scroll />
        </div>
    );
}