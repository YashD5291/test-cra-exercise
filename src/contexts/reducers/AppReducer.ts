import { QuestionnaireStateType } from "../../types/form";
import { EMPTY_QUESTION } from '../../constants/form';
import { ActionType } from "./types";

export const initQuestionnaireState: QuestionnaireStateType = {
  title: '',
  questions: [{ ...EMPTY_QUESTION, index: 0 }]
}

export function appReducer(state: QuestionnaireStateType, { type, payload }: ActionType): QuestionnaireStateType {
  switch (type) {
    case 'UPDATE_TITLE': {
      return {
        ...state,
        title: payload
      }
    }
    case 'ADD_QUESTION': {
      return {
        ...state,
        questions: [
          ...state.questions,
          { ...EMPTY_QUESTION, index: state.questions.length }
        ]
      }
    }
    case 'UPDATE_QUESTION': {
      const { key, value, index } = payload
      let cpQues = [...state.questions]
      cpQues[index] = {
        ...cpQues[index],
        [key]: value
      }
      return {
        ...state,
        questions: [...cpQues]
      }
    }
    case 'REMOVE_QUESTION': {
      const finalizedQues = (state.questions || []).filter(q => q.index !== payload.index).map((q, i) => ({ ...q, index: i }))
      return {
        ...state,
        questions: [...finalizedQues]
      }
    }
    default: {
      return state;
    }
  }
}
