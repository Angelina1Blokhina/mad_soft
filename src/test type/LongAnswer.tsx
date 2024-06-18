import { TextField } from '@mui/material';
import { LongAnswerProps } from '../dataStructure';

const LongAnswer: React.FC<LongAnswerProps> = ({ question, onChange, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h2>{question}</h2>
      <TextField
        value={value}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />
    </div>
  );
};

export default LongAnswer;
