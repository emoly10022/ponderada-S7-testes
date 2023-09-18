import React from 'react';

interface TextInputProps {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  isPassword?: boolean; // Novo prop para definir se é um campo de senha
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, id, placeholder, required, isPassword, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-700 block mb-1 font-medium">
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      {isPassword ? (
        <input
          type="password" // Defina o tipo como 'password'
          id={id}
          required={required}
          className="outline-none text-sm bg-gray-100 border border-[rgba(0, 0, 0, 0.15)] rounded py-1 px-3 block focus:ring-blue-500 focus:border-gray-300 text-gray-700 w-full"
          style={{ boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.1) inset' }}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <input
          type="text"
          id={id}
          required={required}
          className="outline-none text-sm bg-gray-100 border border-[rgba(0, 0, 0, 0.15)] rounded py-1 px-3 block focus:ring-blue-500 focus:border-gray-300 text-gray-700 w-full"
          style={{ boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.1) inset' }}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default TextInput;
