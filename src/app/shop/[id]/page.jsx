import Product from "@/sections/Shop/Product/Product";
import ProductDetails from "@/sections/Shop-Details/ProductDetails/ProductDetails";
import FooterFive from "@/sections/Common/Footer/FooterFive";
import HeaderOne from "@/sections/Common/Header/HeaderOne";
import Scroll from "@/sections/Common/Scroll";

export default function ProductPage() {
    return (
        <main>
            <HeaderOne />
            <div className="breadcumb-wrapper" style={{backgroundColor: '#f8f9fa', padding: '40px 0'}}>
                <div className="container text-center">
                    <h1 className="h2">Product Details</h1>
                </div>
            </div>
            <ProductDetails />
            <FooterFive />
            <Scroll />
        </main>
    );
}