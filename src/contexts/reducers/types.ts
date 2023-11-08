import { Dispatch } from "react";

export type ACTION_TYPE = "UPDATE_TITLE" | "ADD_QUESTION" | "REMOVE_QUESTION" | "UPDATE_QUESTION";

export type ActionType = {
    type: ACTION_TYPE;
    payload?: any;
}

export type DispatchContextType = Dispatch<ActionType>