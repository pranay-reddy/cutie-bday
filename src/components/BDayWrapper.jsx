import React, { useState } from "react";
import Birthday2025 from "./Birthday2025";
import Birthday2026 from "./Birthday2026";
import "./BDayWrapper.css"; // optional wrapper styles

const Birthday = () => {
  const [year, setYear] = useState("2025");

  const renderBirthday = () => {
    if (year === "2025") return <Birthday2025 />;
    if (year === "2026") return <Birthday2026 />;
    return null;
  };

  return (
    <div className="birthday-wrapper">
      {/* Year Selector */}
      <div className="year-selector">
        <label htmlFor="yearSelect">Select Year: </label>
        <select
          id="yearSelect"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>

      {/* Render the selected year's component */}
      {renderBirthday()}
    </div>
  );
};

export default Birthday;
