import { EventHandler, FC } from "react";
import styles from "./QuestionCard.module.scss";
import TextInput from "../TextInput/TextInput";
import Select from "../Select/Select";
import { QuestionType } from "../../types/form";
import { AnswerTypeOptions } from "../../constants/form";
import Button from "../Button/Button";

interface QuestionCardProps extends QuestionType {
  total?: number;
  onFieldValueChange: (key: string, value: string) => void;
  onDelete: (index: number) => void;
}

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  answerType,
  answerValue,
  total = 0,
  index = 0,
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
          {/* <div>
            <Button
              variant="icon"
              icon={<img src="/img/misc-up.svg" alt="Delete" />}
            />
          </div>
          <div>
            <Button
              variant="icon"
              icon={<img src="/img/misc-down.svg" alt="Delete" />}
            />
          </div> */}
          {total > 1 && (
            <div>
              <Button
                variant="icon"
                onClick={() => onDelete(index)}
                icon={<img src="/img/trash-icon.svg" alt="Delete" />}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
