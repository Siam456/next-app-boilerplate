import React, { PropsWithChildren } from 'react';
import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form';

interface Props extends PropsWithChildren {
  label: string;
  name: keyof FieldValues;
  register: UseFormRegister<FieldValues>;
  // eslint-disable-next-line react/require-default-props
  error?: FieldError | undefined;
  // eslint-disable-next-line react/require-default-props
  type?: 'text' | 'number' | 'email' | 'password'; // Specify the type options
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
}

function InputBox({
  label,
  name,
  register,
  error,
  type = 'text',
  placeholder = '',
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-sm font-medium text-white"
        htmlFor={name.toString()}
      >
        {label}
      </label>
      <div className="flex flex-col  rounded-md">
        <input
          type={type}
          placeholder={placeholder || label}
          id={name.toString()}
          {...register(name)}
          className={`bg-gray-600 h-10 appearance-none rounded-lg border px-3 py-2 text-sm leading-tight shadow ${
            error ? 'border-red-500' : 'border-gray-700'
          } focus:shadow-outline bg-gray-900 leading-tight text-white focus:border-blue-500 focus:outline-none`}
        />
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}

export default InputBox;
