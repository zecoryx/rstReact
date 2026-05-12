import { useState } from "react";

/**
 * useForm Hook:
 * Formlar bilan ishlashni soddalashtiradi (inputlarni boshqarish).
 */
function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Basic sanitization: strip HTML tags to prevent simple XSS
    const sanitizedValue = value.replace(/<[^>]*>?/gm, '');
    setValues({
      ...values,
      [name]: sanitizedValue,
    });
  };

  const resetForm = () => setValues(initialValues);

  return [values, handleChange, resetForm];
}

export default useForm;
