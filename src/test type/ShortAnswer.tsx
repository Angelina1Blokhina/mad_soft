import { Input } from '@mui/material';
import { ShortAnswerProps } from '../dataStructure';
const ShortAnswer: React.FC<ShortAnswerProps> = ({ question, onChange, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h2>{question}</h2>
      <Input value={value} onChange={handleChange} fullWidth />
    </div>
  );
};

export default ShortAnswer;
