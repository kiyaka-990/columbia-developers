import BreadcumbSix from "~/sections/Contact/BreadcumbSix/BreadcumbSix.jsx"; // Removed extra 'src'
import ContactArea from "~/sections/Contact/ContactArea";
import ContactAreaTwo from "~/sections/Contact/ContactAreaTwo";
import ContactMap from "~/sections/Contact/ContactMap";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterFive from "~/sections/Common/Footer/FooterFive";
import Scroll from "~/sections/Common/Scroll";

// IMPORTANT: Do NOT import AIChatbot here if it is already in your Layout.js
// Next.js will automatically show the chatbot from the Layout on this page.

export default function ContactPage() {
  return (
    <div style={{overflow: "hidden"}}>
      <HeaderOne />
      <BreadcumbSix />
      <ContactArea />
      <ContactAreaTwo />
      <ContactMap />
      <FooterFive />
      <Scroll />
      
      {/* If you see the chatbot twice, delete the line below. 
         The version in layout.js is already handling the "Floating" behavior.
      */}
    </div>
  );
}