import WishlistArea from "../../sections/Wishlist/WishlistArea";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";

export default function WishlistPage() {
    return (
        <main>
            <HeaderOne />
            {/* Simple Breadcrumb Section */}
            <div className="breadcumb-wrapper" style={{backgroundColor: '#f8f9fa', padding: '60px 0'}}>
                <div className="container">
                    <div className="breadcumb-content text-center">
                        <h1 className="breadcumb-title">My Wishlist</h1>
                    </div>
                </div>
            </div>
            
            <WishlistArea />
            
            <FooterFive />
            <Scroll />
        </main>
    );
}