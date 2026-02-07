import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

const FilterBar = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { value: "all", label: "All Tasks" },
    { value: "pending", label: "Pending" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <FilterListIcon fontSize="small" />
          <span className="text-sm font-medium">Filter:</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentFilter === filter.value
                  ? "bg-google-blue text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
