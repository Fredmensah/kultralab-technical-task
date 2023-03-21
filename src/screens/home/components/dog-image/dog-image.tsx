import React, {useState} from "react";
import { GestureResponderEvent, Image, Modal } from "react-native";
import { DeleteButton, DeleteText, DogAvatar, ImageView, ModalParentView, ModalView, NameText, NameView } from "./dog-image.style";
import Ionicons from '@expo/vector-icons/Ionicons';
import { color, FLEXBOXCOLUMNCENTER, FLEXBOXROWCENTER } from "../../../../theme";
import { PrimaryButton } from "../../../../components";

export const DogImageComponent: React.FC<{
        uri: string 
        name?: string | undefined
        deleteIcon?: boolean
        deleteFunction?: (() => void) | undefined
    }> = ({uri, name = undefined, deleteIcon = false, deleteFunction}) => {
        const [modalVisible, setModalVisible] = useState<boolean>(false);

        return (
        <ImageView>
            <DogAvatar source={{uri: uri}}/>
            {
                deleteIcon &&
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <ModalParentView>
                    <ModalView>
                        <FLEXBOXCOLUMNCENTER>
                            <DeleteText>Are you sure want to delete {name}?</DeleteText>
                        </FLEXBOXCOLUMNCENTER>
                        <FLEXBOXROWCENTER>
                            <PrimaryButton 
                                mode="primary" 
                                title="Cancel" 
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                            <PrimaryButton 
                                mode="secondary" 
                                title="Delete" 
                                onPress={() => {
                                    deleteFunction && deleteFunction();
                                    setModalVisible(!modalVisible);
                                }}
                            />
                        </FLEXBOXROWCENTER>
                    </ModalView>
                    
                </ModalParentView>
            </Modal>
            }
            {
                deleteIcon &&
                    <DeleteButton onPress={() => setModalVisible(true)}>
                        <Ionicons
                            name="trash-outline"
                            color={color.background}
                            size={32}
                        />
                    </DeleteButton>
            }
            {
                name && 
                    <NameView>
                        <NameText>{name}</NameText>
                    </NameView>
            }
        </ImageView>
    )
}   