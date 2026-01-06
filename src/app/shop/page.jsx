/**
 * FIX NOTES:
 * 1. The error "Module not found" for ProductDetails suggests the relative path 
 * '../../sections' is reaching the wrong depth or the casing is wrong.
 * 2. Mixed import styles (~/ vs ../../) can cause webpack resolution errors.
 * 3. Recommendation: Use the absolute alias consistently.
 */

// Replace the old imports with these:
import Product from "@/sections/Shop/Product/Product";
import ProductDetails from "@/sections/Shop-Details/ProductDetails/ProductDetails";
import FooterFive from "@/sections/Common/Footer/FooterFive";
import HeaderOne from "@/sections/Common/Header/HeaderOne";
import Scroll from "@/sections/Common/Scroll";

export default function ShopPage() {
    return (
        <main>
            <HeaderOne />
            {/* The build error specifically complained about ProductDetails.
                Ensure you are using the component you intended to render.
            */}
            <Product /> 
            <ProductDetails />
            <FooterFive />
            <Scroll />
        </main>
    );
}