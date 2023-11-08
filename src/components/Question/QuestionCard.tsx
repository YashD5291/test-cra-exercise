import { EventHandler, FC } from "react";
import styles from "./QuestionCard.module.scss";
import TextInput from "../TextInput/TextInput";
import Select from "../Select/Select";
import { QuestionType } from "../../types/form";
import { AnswerTypeOptions } from "../../constants/form";

interface QuestionCardProps extends QuestionType {
  total?: number;
  onFieldValueChange: (key: string, value: string) => void;
  onDelete: (index: number) => void;
}

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  answerType,
  answerValue,
  total,
  index,
  onDelete,
  onFieldValueChange,
}) => {
  const handleFieldValueChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => onFieldValueChange(e.target.name, e.target.value);

  return (
    <div className={styles.questionCardWrap}>
      <div>
        <TextInput
          label="Question"
          value={question}
          name="question"
          onChange={handleFieldValueChange}
          placeholder="What do you want to ask?"
        />
      </div>
      <div className={styles.ansSectionWrap}>
        <Select
          value={answerType}
          label="Answer"
          onChange={handleFieldValueChange}
          options={AnswerTypeOptions}
          name="answerType"
        />
        <TextInput
          styleOverrides={{ textInputWrap: styles.ansInputText }}
          name="answerValue"
          placeholder="Short Answer Text"
          onChange={handleFieldValueChange}
          value={answerValue}
        />
      </div>
      <div className={styles.controlsWrap}>
        <div className={styles.indexText}>{`${index + 1} of ${total}`}</div>
        <div className={styles.actionsWrap}>
          {/* <div><img src="/img/misc-up.svg" alt="Up" /></div>
                    <div><img src="/img/misc-down.svg" alt="Down" /></div> */}
          <div onClick={() => onDelete(index)}>
            <img src="/img/trash-icon.svg" alt="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
