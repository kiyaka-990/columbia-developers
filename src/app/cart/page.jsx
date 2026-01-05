import CartArea from "../../sections/Cart/CartArea/CartArea";
import BreadcumbFour from "~/sections/Cart/BreadcumbFour";
import HeaderOne from "~/sections/Common/Header/HeaderOne";

export default function Page() {
    return (
        <main>
            {/* You can add your Header/Breadcrumb here */}
            <HeaderOne />
            <BreadcumbFour />
            <CartArea />
        </main>
    );
}