export interface Progress {
  currentStep: number;
  answers: { [key: number]: any };
  currentTime: number;
}

export interface TimerProps {
  durationInSeconds: number; // Продолжительность таймера в секундах
  onTimeout: () => void; // Callback функция, вызываемая по истечении времени
}

export interface TestContextProps {
  progress: Progress;
  setProgress: (newProgress: Progress) => void;
}

export interface LongAnswerProps {
  question: string;
  onChange: (value: string) => void;
  value: string;
}

export interface SingleChoiceProps {
  question: string;
  options: string[];
  onChange: (value: string) => void;
  value: string;
}

export interface ShortAnswerProps {
  question: string;
  onChange: (value: string) => void;
  value: string;
}

export interface MultipleChoiceProps {
  question: string;
  options: string[];
  onChange: (value: string[]) => void;
  value: string[];
}
