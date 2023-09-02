import { JSX } from 'react';


export interface ICallback {
  (): void;
}

export interface IValueCallback<T> {
  (value: T): void;
}


export interface IPropsWithClassname {
  className?: string;
}

export interface IPropsWithChildren {
  readonly children: JSX.Element | JSX.Element[];
}
