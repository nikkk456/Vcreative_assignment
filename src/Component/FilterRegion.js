import React from 'react'

const FilterRegion = ({ regions, onSelectRegion }) => {
    return (
        <div className="filter-container">
            <label htmlFor="region">Select Region: </label>
            <select id="region" onChange={(e) => onSelectRegion(e.target.value)}>
                <option value="">All</option>
                {regions.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FilterRegion
