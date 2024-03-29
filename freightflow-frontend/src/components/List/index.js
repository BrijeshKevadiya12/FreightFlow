import React from "react";


const List = ({ selectedCountry, handleCountryChange }) => {
  const countries = [
    { value: 'India', label: 'India' },
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'France', label: 'France' },
    { value: 'Germany', label: 'Germany' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Japan', label: 'Japan' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'China', label: 'China' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'Argentina', label: 'Argentina' },
  ];

  return (
    <>
      <form className="max-w-sm mx-auto">
        <select
        required="true"
          id="countries"
          value={selectedCountry}
          onChange={(e) => handleCountryChange(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value="">
            Choose a country
          </option>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default List;
