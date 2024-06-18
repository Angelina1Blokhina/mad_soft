// components/SingleChoiceQuestion.tsx
import { FormControlLabel, Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';
import { SingleChoiceProps } from '../dataStructure';

const SingleChoice: React.FC<SingleChoiceProps> = ({ question, options, onChange, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h2>{question}</h2>
      <RadioGroup value={value} onChange={handleChange}>
        {options.map((option, index) => (
          <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </div>
  );
};

export default SingleChoice;
