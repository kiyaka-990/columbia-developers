import BreadcumbSeven from "~/sections/Project/BreadcumbSeven";
import Project from "~/sections/Project/Project";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";
export default function ProjectPage() {
    return (
        <div>
            <HeaderOne />
            <BreadcumbSeven />
            <Project />
            <FooterFive />
            <Scroll />
        </div>
    );
}