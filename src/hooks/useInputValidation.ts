import {useState} from 'react';

type TEXT_CHANGE_FUNCTION = (text: string | number) => void;

const useInputValidation = (
  name: string,
  errorMsg: string,
  required: boolean,
  setIsValid: Function,
  onChangeText: TEXT_CHANGE_FUNCTION,
  setCheckValidity?: Function,
): [boolean, string, Function] => {
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');

  async function checkIsValid(value: string) {
    const result = value.length && typeof value !== 'undefined' && value !== null;

    if (result) {
      setIsValid(name, true);
      setError(false);
      setErrorText('');
    } else {
      setIsValid(name, false);
      setError(true);
      setErrorText(errorMsg);
    }
  }

  const onChange = (value: string) => {
    onChangeText(value);
    if (required) {
      checkIsValid(value);
    }

    setCheckValidity && setCheckValidity(false);
  };

  return [error, errorText, onChange];
};

export default useInputValidation;
