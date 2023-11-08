

export enum ANSWER_TYPES {
    SHORT = 'Short Answer'
}

export type QuestionType = {
    question: string;
    answerType: ANSWER_TYPES;
    answerValue: string;
    index: number
}

export type QuestionnaireStateType = {
    title: string;
    questions: QuestionType[]
}