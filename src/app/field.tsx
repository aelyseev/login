import { ChangeEvent, FocusEvent, ReactElement, useState } from 'react';

type Props = {
  type: 'email' | 'password';
  onChange: (value: string) => unknown;
  value: string;
  name: string;
  hint: string;
  label?: string;
  required?: boolean;
  minLength?: number;
};

export function Field({ type, onChange, hint, name, label, value, minLength, required = false }: Props): ReactElement {
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setValid(e.target.checkValidity());
    onChange(e.target.value);
  };

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setTouched((state) => state || value !== '');
    setValid(e.target.checkValidity());
  };

  return (
    <div>
      <label className="flex flex-col gap-y-1 text-gray-600">
        <div className="text-lg">{label || name}</div>
        <input
          value={value}
          name={name}
          onBlur={blurHandler}
          minLength={minLength}
          required={required}
          className="border-gray-300 outline-blue-500 rounded focus:border-blue-500"
          type={type}
          onChange={change}
        />
        {!valid && touched ? (
          <div role="alert" className="text-orange-600 text-base md:text-sm">
            {hint}
          </div>
        ) : (
          <div aria-hidden className="text-base md:text-sm">
            &nbsp;
          </div>
        )}
      </label>
    </div>
  );
}
