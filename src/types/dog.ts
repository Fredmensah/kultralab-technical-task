import { STATE_ACTION_TYPE } from "./input";

export type Dog = {
    name: string
    uri: string
};

export type DogList = Array<Dog>;

export type DogContextProps = {
    items: DogList
    dispatch: Function
}

export type DogStateActions = {
    dog: Dog
    type: STATE_ACTION_TYPE
}