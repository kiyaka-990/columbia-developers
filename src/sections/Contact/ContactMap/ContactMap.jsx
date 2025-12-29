const ContactMap = () => {
  // Coordinates for a business district in Nairobi, Kenya (e.g., Upper Hill or CBD area)
  // For production, this should be the exact address of Ga'als Agencies Limited.
  const nairobiEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.228178044715!2d36.8125!3d-1.28828955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4ffc6806f%3A0xc3f173c36b1e6047!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1703248800000!5m2!1sen!2ske";

  return (
    <div className="map-area overflow-hidden">
      <div className="map-sec">
        <iframe
          // Updated src to point to a relevant map location (Nairobi CBD placeholder)
          src={nairobiEmbedUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Columbia Developers Limited Nairobi Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;