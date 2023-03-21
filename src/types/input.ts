export type ON_TEXT_CHANGE_WITH_NAME_FUNCTION = (
    name: string,
    text: string | number | boolean,
) => void | undefined;

export type GENERIC_OBJECT = {
    [key: string]: any;
};

export type STATE_ACTION_TYPE = 'ADD_DOG' | 'REMOVE_DOG' | 'CLEAR_ALL';