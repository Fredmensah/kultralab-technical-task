import React from 'react';
import type { RouteProp } from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import { DogsView } from './DogsView';
import { removeDog, useDogContext } from '../../context/DogContext';
import { Dog } from '../../types/dog';
import { Alert } from 'react-native';

interface DogsContainerProps {
  navigation: RouteProp<ParamListBase>;
}

export const DogsContainer = ({navigation}: DogsContainerProps) => {
  const {items, dispatch} = useDogContext();

  const removeDogHandler = (dog: Dog) => {
    dispatch(removeDog(dog));
    Alert.alert(`You have removed ${dog.name} from your dogs`);
  }

  return (
    <DogsView
      dogs={items}
      deleteFunction={removeDogHandler}
    />
  )
};
