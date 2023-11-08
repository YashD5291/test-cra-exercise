import { FC } from "react";
import styles from "./Questions.module.scss";
import QuestionCard from "../Question/QuestionCard";
import { useAppDispatch, useAppState } from "../../contexts/AppContext";

interface QuestionsProps {}

const Questions: FC<QuestionsProps> = () => {
  const { questions } = useAppState();
  const dispatch = useAppDispatch();

  const onDelete = (i: number) =>
    dispatch({ type: "REMOVE_QUESTION", payload: { index: i } });

  const onFieldValueChange = (key: string, value: any, i: number) =>
    dispatch({
      type: "UPDATE_QUESTION",
      payload: { index: i, key, value },
    });

  return (
    <div className={styles.questionsListWrap}>
      {questions.map((q) => (
        <QuestionCard
          total={questions.length}
          {...q}
          onDelete={onDelete}
          onFieldValueChange={(k, v) => onFieldValueChange(k, v, q.index)}
        />
      ))}
    </div>
  );
};

export default Questions;
