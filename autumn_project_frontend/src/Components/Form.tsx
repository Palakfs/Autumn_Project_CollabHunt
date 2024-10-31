import React, { useState } from 'react';
import FormField from './FormField';

interface FormComponentProps {
  fields: {
    label: string;
    type: string;
    placeholder?: string;
    isTextArea?: boolean;
    options?: string[];
  }[];
  onSubmit: (data: { [key: string]: any }) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.])([\/\w .-]*)*\/?$/;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    label: string
  ) => {
    const value = event.target.value;

    
    setFormData({
      ...formData,
      [label]: value,
    });

  
    if (errors[label]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[label];
        return updatedErrors;
      });
    }
  };

  const handleAddOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    if (option && !selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors: { [key: string]: string } = {};

   
    fields.forEach((field) => {
      const value = formData[field.label];

      
      if (field.label !== 'Link For More Details' && !value) {
        newErrors[field.label] = `${field.label} is required.`;
      }

    
      if (field.label === 'Link For More Details') {
        if (value && !urlRegex.test(value)) {
          newErrors[field.label] = 'Please enter a valid URL.';
        }
      }
    });

    setErrors(newErrors);

    
    if (Object.keys(newErrors).length === 0) {
      onSubmit({ ...formData, selectedOptions });
    } else {
      console.log('Form has errors:', newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
      {fields.map((field, index) => (
        <div key={index}>
          {field.label === 'Category' || field.label === 'Visible To' ? (
            <>
              <label className="block text-gray-700 font-bold mb-2">{field.label}</label>
              <select
                onChange={handleAddOption}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>Select options</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="mt-2">
                {selectedOptions.map((option) => (
                  <div key={option} className="flex items-center justify-between p-2 bg-gray-200 rounded mt-1">
                    <span>{option}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(option)}
                      className="text-red-500 font-bold"
                    >
                      &#x2716;
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <FormField
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.label] || ''}
                onChange={(e) => handleChange(e, field.label)}
                isTextArea={field.isTextArea}
              />
              {errors[field.label] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.label]}</p>
              )}
            </>
          )}
        </div>
      ))}
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;