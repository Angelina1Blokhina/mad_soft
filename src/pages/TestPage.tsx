import { useState } from 'react';
import SingleChoice from '../test type/SingleChoice';
import LongAnswer from '../test type/LongAnswer';
import ShortAnswer from '../test type/ShortAnswer';
import MultipleChoice from '../test type/MultipleChoice';
import { useTestContext } from '../context/TestContext';
import { useNavigate } from 'react-router-dom';
import { Step, StepLabel, Stepper } from '@mui/material';
import Timer from '../components/Timer';
import './test-page.css';
import { questions } from '../data';

const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const { progress, setProgress } = useTestContext();
  const [currentStep, setCurrentStep] = useState(progress.currentStep);
  const steps = questions.map((question, index) => `Вопрос ${index + 1}`);

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress({ ...progress, currentStep: currentStep + 1 });
    } else {
      navigate('/result'); // Перейти на страницу с результатами
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleNext();
  };

  const handleChange = (value: any) => {
    console.log('res', value);
    setProgress({
      ...progress,
      answers: {
        ...progress.answers,
        [questions[currentStep].id]: value
      }
    });
  };

  const handleTimeout = () => {
    navigate('/result'); // Перейти на страницу с результатами по истечении времени
  };
  const renderQuestion = (question: any) => {
    switch (question.type) {
      case 'single':
        return (
          <SingleChoice
            question={question.question}
            options={question.options}
            onChange={handleChange}
            value={progress.answers[question.id] || ''}
          />
        );
      case 'multiple':
        return (
          <MultipleChoice
            question={question.question}
            options={question.options}
            onChange={handleChange}
            value={progress.answers[question.id] || []}
          />
        );
      case 'short':
        return (
          <ShortAnswer
            question={question.question}
            onChange={handleChange}
            value={progress.answers[question.id] || ''}
          />
        );
      case 'long':
        return (
          <LongAnswer
            question={question.question}
            onChange={handleChange}
            value={progress.answers[question.id] || ''}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="header-test">
        <h2>Тестирование</h2>
        <Timer durationInSeconds={progress.currentTime} onTimeout={handleTimeout} />
      </div>
      <div>
        <Stepper activeStep={currentStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}></StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <form onSubmit={handleSubmit}>
        {renderQuestion(questions[currentStep])}
        <button type="submit">
          {currentStep < questions.length - 1 ? 'Ответить' : 'Завершить'}
        </button>
      </form>
    </div>
  );
};

export default TestPage;
