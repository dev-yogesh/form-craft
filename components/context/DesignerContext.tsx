"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { FromElementInstance } from "../FormElements";

type DesignerContextType = {
  elements: FromElementInstance[];
  addElement: (index: number, element: FromElementInstance) => void;
  removeElement: (id: string) => void;

  selectedElement: FromElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FromElementInstance | null>>;

  updateElement: (id: string, element: FromElementInstance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<FromElementInstance[]>([]);
  const [selectedElement, setSelectedElement] =
    useState<FromElementInstance | null>(null);

  const addElement = (index: number, element: FromElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  const updateElement = (id: string, element: FromElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((el) => el.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement,
        updateElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
