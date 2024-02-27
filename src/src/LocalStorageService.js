// LocalStorageService.js
const KEY_SELECTED_EMPLOYEES = "selectedEmployees";

export const getSelectedEmployees = () => {
  const storedData = localStorage.getItem(KEY_SELECTED_EMPLOYEES);
  return storedData ? JSON.parse(storedData) : [];
};

export const setSelectedEmployees = (employees) => {
  localStorage.setItem(KEY_SELECTED_EMPLOYEES, JSON.stringify(employees));
};
