import { useState } from 'react';

const useTogglePasswordDisplay = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return [showPassword, togglePasswordVisibility];
};

export default useTogglePasswordDisplay;
