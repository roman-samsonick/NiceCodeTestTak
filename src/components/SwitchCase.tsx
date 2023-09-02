import React, {createContext, useContext, JSX} from 'react';
import {  IPropsWithChildren } from '../models/clientModels';

const SwitchContext = createContext<unknown>(undefined);

export function Switch({
  children, switchValue
}: { switchValue: unknown } & IPropsWithChildren): JSX.Element {
  return <SwitchContext.Provider value={switchValue}
                                 children={children} />;
}

export function Case({ children, caseValue }: { caseValue: unknown } & IPropsWithChildren): JSX.Element {
  const current = useContext(SwitchContext);

  return <>{caseValue === current && children}</>;
}
