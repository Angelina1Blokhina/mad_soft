import { useTestContext } from '../context/TestContext';
import { questions } from '../data';

const ResultPage: React.FC = () => {
  const { progress } = useTestContext();

  return (
    <div className="container">
      <h2>Результаты тестирования</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <strong>{question.question}:</strong> {progress.answers[question.id] || 'Не отвечено'}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResultPage;
