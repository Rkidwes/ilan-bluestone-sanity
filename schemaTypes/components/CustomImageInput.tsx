import React, { useState, useEffect } from 'react';
import { set, unset } from 'sanity';
import { FormField } from '@sanity/base/components';
import PatchEvent from '@sanity/form-builder/PatchEvent';
import { withDocument } from 'part:@sanity/form-builder';

const CustomImageInput = React.forwardRef((props, ref) => {
  const { type, value = [], onChange, level } = props;
  const [imageInputs, setImageInputs] = useState([...value, {}]);

  useEffect(() => {
    if (value.length < imageInputs.length) {
      setImageInputs([...value, {}]);
    }
  }, [value]);

  const handleUpload = (index, image) => {
    const newValue = [...value];
    newValue[index] = image;
    onChange(PatchEvent.from(set(newValue)));
  };

  const handleRemove = (index) => {
    const newValue = value.filter((_, i) => i !== index);
    onChange(PatchEvent.from(set(newValue)));
  };

  return (
    <FormField level={level} title={type.title} description={type.description}>
      {imageInputs.map((input, index) => (
        <div key={index}>
          <input
            type="file"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file) {
                handleUpload(index, { _type: 'image', asset: { _type: 'reference', _ref: file } });
              }
            }}
          />
          {value[index] && (
            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
    </FormField>
  );
});

export default withDocument(CustomImageInput);