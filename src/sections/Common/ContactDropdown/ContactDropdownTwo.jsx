"use client";

import { useEffect } from "react";
import niceSelect from "react-nice-select";

/**
 * ContactDropdownTwo Component
 * * Fixed: Replaced the 'selected' attribute on the <option> tag with 
 * the 'defaultValue' prop on the <select> tag to comply with React standards
 * and resolve hydration warnings.
 */
const ContactDropdownTwo = ({ options = [], defaultValue = "Select Subject" }) => {
  useEffect(() => {
    niceSelect();
  }, []);

  return (
    <div className="col-12">
      <div className="form-group custom-form-design">
        <select
          name="subject"
          id="subject"
          className="single-select nice-select form-select"
          defaultValue="" // Sets the initial value to the empty string option
        >
          <option className="select-style" value="" disabled hidden>
            {defaultValue}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ContactDropdownTwo;