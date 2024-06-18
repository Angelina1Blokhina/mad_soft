// context/TestContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Progress, TestContextProps } from '../dataStructure';

const TestContext = createContext<TestContextProps | undefined>(undefined);

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTestContext must be used within a TestProvider');
  }
  return context;
};

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgressState] = useState<Progress>(() => {
    const savedProgress = localStorage.getItem('progress');
    return savedProgress
      ? JSON.parse(savedProgress)
      : { currentStep: 0, answers: {}, currentTime: 2000 };
  });

  const setProgress = (newProgress: Progress) => {
    setProgressState(newProgress);
    localStorage.setItem('progress', JSON.stringify(newProgress));
  };

  return <TestContext.Provider value={{ progress, setProgress }}>{children}</TestContext.Provider>;
};
