import {useState} from 'react';
import { GENERIC_OBJECT, ON_TEXT_CHANGE_WITH_NAME_FUNCTION } from '../types/input';

const useFormFields = (
  defaultFormFields: GENERIC_OBJECT,
): [GENERIC_OBJECT, ON_TEXT_CHANGE_WITH_NAME_FUNCTION, Function] => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const onChangeParamHandler = (
    name: string,
    text: string | number | boolean,
  ) => {
    const {...oldFormFields} = formFields;
    oldFormFields[name] = text;
    setFormFields(oldFormFields);
  };

  const onUpdateFormFields = (newFormFields: GENERIC_OBJECT) => {
    setFormFields(newFormFields);
  };

  return [
    formFields,
    onChangeParamHandler,
    onUpdateFormFields,
  ];
};

export default useFormFields;
