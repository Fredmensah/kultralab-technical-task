import React, { createContext, useReducer, useContext } from "react";
import { Dog, DogList, DogStateActions } from "../types/dog";

export const DogsContext = createContext({
  items: [],
  dispatch: () => { }
});

// Initial state
const dogs: DogList = [];

// Actions
export const ADD_DOG = "ADD_DOG";
export const REMOVE_DOG = "REMOVE_DOG";

// Action creators
export function addDog(dog: Dog) {
  return { type: ADD_DOG, dog };
}

export function removeDog(dog: Dog) {
  return { type: REMOVE_DOG, dog };
}

// Reducer
export function dogReducer(state: DogList, action: DogStateActions) {
  switch (action.type) {
    case ADD_DOG:
      return [...state, action.dog];
    case REMOVE_DOG:
      return state.filter(dog => dog.uri !== action.dog.uri);
    default:
      return state;
  }
}

function DogsProvider(props) {
  const [items, dispatch] = useReducer(dogReducer, dogs);

  const dogsData = { items, dispatch };

  return <DogsContext.Provider value={dogsData} {...props} />;
}

function useDogContext() {
  return useContext(DogsContext);
}

export { DogsProvider, useDogContext };