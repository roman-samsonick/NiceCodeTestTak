import React from 'react';
import { IPropsWithClassname } from '../models/clientModels';

export const ActiveCheckBoxIcon = ({ className }: IPropsWithClassname) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         className={className}
         width="18"
         height="18"
         viewBox="0 0 18 18"
         fill="none">
      <path fillRule="evenodd"
            clipRule="evenodd"
            d="M7.94899 10.4186L6.14963 8.58088L5 9.75505L7.00133 11.7994L8.17667 13L13 5.95263L11.6679 5L7.94899 10.4186Z"
      />
    </svg>
  );
};
