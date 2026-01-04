"use client";

import { useEffect } from "react";
import niceSelect from "react-nice-select";

const ContactDropdown = () => {
  useEffect(() => {
    niceSelect();
  }, []);
  const defaultValue = 'Your Inquiry';
  const options = [
    { value: 'Civil Engineering', label: 'Civil Engineering' },
    { value: 'Structural Design', label: 'Structural Design' },
    { value: 'Infrastructure Development', label: 'Infrastructure Development' },
    { value: 'Project Management', label: 'Project Management' },
    { value: 'Water Engineering', label: 'Water Engineering' },
    { value: 'Road Construction', label: 'Road Construction' }
];
  return (

    <div className="col-md-6">
      <div className="form-group custom-form-design">
        <select
          name="subject"
          id="subject"
          className="single-select nice-select form-select"
        >
          <option value="" disabled selected hidden>
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

export default ContactDropdown;
