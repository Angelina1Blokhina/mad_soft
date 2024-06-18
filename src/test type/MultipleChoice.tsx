import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { MultipleChoiceProps } from '../dataStructure';

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  options,
  onChange,
  value
}: MultipleChoiceProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const newValues = value.includes(newValue)
      ? value.filter((v) => v !== newValue)
      : [...value, newValue];
    onChange(newValues);
  };

  return (
    <div>
      <h2>{question}</h2>
      <FormControl component="fieldset">
        <FormGroup>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox checked={value.includes(option)} onChange={handleChange} value={option} />
              }
              label={option}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default MultipleChoice;
