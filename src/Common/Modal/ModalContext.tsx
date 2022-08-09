import React, { createContext, useCallback, useState } from 'react';

export type ModalContextState = {
  closeModal: () => void;
  content: React.ReactNode | null;
  setContent: (newContent: React.ReactNode) => void;
};

export const ModalContext = createContext<ModalContextState>({
  closeModal: () => null,
  content: null,
  setContent: () => null,
});

export const ModalContentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const closeModal = useCallback(() => setContent(null), []);

  return (
    <ModalContext.Provider
      value={{
        content,
        setContent,
        closeModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
