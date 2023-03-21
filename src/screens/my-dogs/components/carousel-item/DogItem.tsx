import React from "react";
import { GestureResponderEvent } from "react-native";
import { FLEXBOXCOLUMNCENTER } from "../../../../theme";
import { Dog } from "../../../../types/dog";
import { DogImageComponent } from "../../../home/components/dog-image/dog-image";
import { ItemView } from "./DogItem.style";

interface ComponentProps {
    dog: Dog
    deleteFunction: ((event: GestureResponderEvent) => void) | undefined
}

export const DogItemComponent: React.FC<ComponentProps> = ({dog, deleteFunction}) => {
    return (
        <ItemView>
            <FLEXBOXCOLUMNCENTER>
                <DogImageComponent
                    uri={dog.uri}
                    name={dog.name}
                    deleteIcon={true}
                    deleteFunction={deleteFunction}
                />
            </FLEXBOXCOLUMNCENTER>
        </ItemView>
    )
}