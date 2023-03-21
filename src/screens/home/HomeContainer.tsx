import React, {useEffect, useState} from 'react';
import type { RouteProp } from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import { HomeView } from './HomeView';
import { HttpErrorInterface } from '../../types/http-error';
import imageApiHandler from '../../services/http/image-handler';
import { ERRORDEFAULTSTATE } from '../../constants';
import useFormFields from '../../hooks/useFormFields';
import { allAreTrue } from '../../utils/system-helpers';
import { addDog, useDogContext } from '../../context/DogContext';
import { Dog } from '../../types/dog';
import { Alert } from 'react-native';

interface HomeContainerProps {
  navigation: RouteProp<ParamListBase>;
}

const DOG_FORM_DETAILS: Dog = {
  uri: '',
  name: '',
};

const DOG_FORM_DETAILS_VALID: {[key: string]: boolean} = {
  uri: true,
  name: false,
};

export const HomeContainer = ({navigation}: HomeContainerProps) => {
  const [fetching, setFetching] = useState<boolean>(true);
  const [formDetails, setFormDetails] = useFormFields(DOG_FORM_DETAILS);
  const [isValid, setIsValid] = useFormFields(DOG_FORM_DETAILS_VALID);
  const [error, setError] = useState<HttpErrorInterface>(ERRORDEFAULTSTATE);
  const [refresh, setRefresh] = useState<boolean>(false);

  const {items, dispatch} = useDogContext();
  const {uri, name} = formDetails;
 
  useEffect(    
    () => {
      imageApiHandler()
      .then(response => {
        handleUriChange(response.message)
        setFetching(false)
        setError(ERRORDEFAULTSTATE)
        setRefresh(false)
      })
      .catch(error => {
        setFetching(false)
        setError({
          isError: true,
          message: error
        })
      })
  }, [refresh]);

  const handleNameChange = (text: string) => setFormDetails('name', text);

  const handleUriChange = (text: string) => setFormDetails('uri', text);

  // Add new dog to state and alert user if successful
  const addDogHandler = () => {
    if (items.some((dog: Dog) => dog.uri === formDetails.uri || dog.name === formDetails.name)) {
      Alert.alert('You own this dog already');
      return;
    }

    dispatch(addDog(formDetails));
    Alert.alert(`You have added ${formDetails.name} to your dogs`);
    setIsValid('name', false);
    handleNameChange('');
  };

  return (
    <HomeView
      fetching={fetching}
      dogImage={uri}
      error={error}
      nameConfig={{name, handleNameChange, setIsValid}}
      submitState={!allAreTrue(isValid)}
      setRefresh={setRefresh}
      addDogHandler={addDogHandler}
    />
  )
};
