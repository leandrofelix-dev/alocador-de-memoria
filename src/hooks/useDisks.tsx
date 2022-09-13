import React, { createContext, useContext, useState } from "react";

export type IDisksProps = {
  id: string
  name: string,
  size: number,
  files: {
    size: number,
    id: string,
    active: boolean
  }[],
  type: 'contigua' | 'encadeada' | 'indexada'
}

type DisksContextData = {
  disks: IDisksProps[]
  setDisks: React.Dispatch<React.SetStateAction<IDisksProps[]>>
};

type DisksProviderProps = {
  children: React.ReactNode;
};

const DisksContext = createContext<DisksContextData>({} as DisksContextData);

export function DisksProvider({ children }: DisksProviderProps) {
  const [disks, setDisks] = useState<IDisksProps[]>([])

  return (
    <DisksContext.Provider value={{
      disks,
      setDisks
    }}>
      {children}
    </DisksContext.Provider>
  );
}

export const useDisks = () => {
  const context = useContext(DisksContext)

  if (!context) {
    throw new Error('You just can access this context inside a provider')
  }

  return context
}
