"use client";

import { useEffect } from "react";
import niceSelect from "react-nice-select";

const NiceSelectDropDown = () => {
  useEffect(() => {
    niceSelect();
  }, []);
  return (
    <div className="form-group">
      <select
        name="subject"
        id="subject"
        className="single-select nice-select form-select"
      >
        <option value="" disabled selected hidden>
          Your Inquiry
        </option>
        <option value="General Construction Services">General Construction Services</option>
        <option value="Project Management & Consultancy">Project Management & Consultancy</option>
        <option value="Electrical & Mechanical Works">Electrical & Mechanical Works</option>
        <option value="Interior Finishing & Fit-Out">Interior Finishing & Fit-Out</option>
      </select>
    </div>
  );
};

export default NiceSelectDropDown;
