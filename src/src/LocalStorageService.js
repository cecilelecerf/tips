// LocalStorageService.js
const KEY_SELECTED_EMPLOYEES = "selectedEmployees";

export const getSelectedEmployees = (location) => {
  const storedData = localStorage.getItem(`${KEY_SELECTED_EMPLOYEES}_${location}`);
  return storedData ? JSON.parse(storedData) : [];
};

export const setSelectedEmployees = (location, employees) => {
  localStorage.setItem(`${KEY_SELECTED_EMPLOYEES}_${location}`, JSON.stringify(employees));
};
