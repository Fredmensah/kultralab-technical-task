import React from "react";
import { Carousel } from "../../components";
import Screen from "../../components/screen/Screen";
import { Dog, DogList } from "../../types/dog";
import { DogItemComponent } from "./components/carousel-item/DogItem";

interface DogsViewProps {
    dogs: DogList
    deleteFunction: ((dog: Dog) => void) | undefined
}

export const DogsView: React.FC<DogsViewProps> = ({dogs, deleteFunction}) => {

    return (
        <Screen
            preset="scroll"
            backgroundColor="white"
        >
            <Carousel
                items={dogs}
                childItemComponent={DogItemComponent}
                deleteFunction={deleteFunction}
            />
        </Screen>
    )
}