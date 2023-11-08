import { OptionType } from "../components/Select/Select";
import { ANSWER_TYPES, QuestionType } from "../types/form";

export const EMPTY_QUESTION: Omit<QuestionType, "index"> = {
    answerType: ANSWER_TYPES.SHORT,
    answerValue: '',
    question: ''
}

export const AnswerTypeOptions: OptionType[] = Object.values(ANSWER_TYPES).map(a => ({ label: a, value: a }));