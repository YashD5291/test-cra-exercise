import { FC } from "react";
import styles from "./Form.module.scss";
import Questions from "../Questions/Questions";
import Button from "../Button/Button";
import { useAppDispatch, useAppState } from "../../contexts/AppContext";

interface QuestionsProps {}

const QuestionnaireForm: FC<QuestionsProps> = () => {
  const dispatch = useAppDispatch();
  const state = useAppState();

  const addQuestion = () => dispatch({ type: "ADD_QUESTION" });

  const handleSubmit = () => {
    console.log(`[Questionnaire State]`, state);
  };

  return (
    <div className={styles.questionnaireFormWrap}>
      <div className={styles.questionnaireForm}>
        <div>
          <Questions />
        </div>

        <div className={styles.formActions}>
          <Button
            styleOverrides={{ btnLabelWrap: styles.formActionBtnLabelWrap }}
            variant="primary-outlined"
            label="Add Question"
            onClick={addQuestion}
            icon={<img src="/img/add-icon.svg" alt="Add Question" />}
          />

          <Button
            styleOverrides={{ btnLabelWrap: styles.formActionBtnLabelWrap }}
            variant="primary-filled"
            label="Save & Share"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
