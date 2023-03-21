import React from "react";
import { GestureResponderEvent, Image, ScrollView, Text, View } from "react-native";
import { PrimaryActivityIndicator, PrimaryButton } from "../../components";
import { PrimaryInput } from "../../components/input/input";
import Screen from "../../components/screen/Screen";
import { FLEXBOXCOLUMNCENTER, FLEXBOXROWCENTER, FULLSCREEN } from "../../theme";
import { HttpErrorInterface } from "../../types/http-error";
import { DogImageComponent } from "./components/dog-image/dog-image";

interface HomeViewProps {
    fetching: boolean
    dogImage: string
    error: HttpErrorInterface
    nameConfig: {
        name: string
        handleNameChange: ((text: string) => void) | undefined
        setIsValid: Function
    }
    submitState: boolean
    setRefresh: Function
    addDogHandler: ((event: GestureResponderEvent) => void) | undefined
}

export const HomeView: React.FC<HomeViewProps> = ({addDogHandler, fetching, dogImage, nameConfig, setRefresh, submitState, error}) => {

    return (
        <Screen
            preset="scroll"
            backgroundColor="white"
        >
            {
                fetching ? 
                    <PrimaryActivityIndicator text="Loading random dog image"/>
                :
                    <FULLSCREEN>
                        <FLEXBOXCOLUMNCENTER>
                            <DogImageComponent
                                uri={dogImage}
                            />
                        </FLEXBOXCOLUMNCENTER>
                        <FLEXBOXCOLUMNCENTER>
                            <PrimaryInput
                                label="Name"
                                errorMsg="Please enter dog's name"
                                onChangeText={nameConfig.handleNameChange}
                                name="name"
                                required
                                value={nameConfig.name}
                                setIsValid={nameConfig.setIsValid}
                            />
                        </FLEXBOXCOLUMNCENTER>
                        <FLEXBOXROWCENTER>
                            <PrimaryButton onPress={addDogHandler} disabled={submitState} mode="primary" title="Save" />
                            <PrimaryButton onPress={() => setRefresh(true)} mode="secondary" title="Refresh Image" />
                        </FLEXBOXROWCENTER>
                    </FULLSCREEN>
            }
        </Screen>
    )
}