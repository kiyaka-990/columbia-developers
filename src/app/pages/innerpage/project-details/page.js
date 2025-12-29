import BreadcumbEight from "~/sections/Project-Details/BreadcumbEight";
import ContactSix from "~/sections/Project-Details/ContactSix";
import ProjectDetails from "~/sections/Project-Details/ProjectDetails";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";
export default function ProjectDetailsPage() {
    return (
        <div style={{overflow: 'hidden'}}>
            <HeaderOne />
            <BreadcumbEight />
            <ProjectDetails />
            <ContactSix />
            <FooterFive />
            <Scroll />
        </div>
    );
}