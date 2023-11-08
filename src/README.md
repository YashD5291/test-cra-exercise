## Styling
All components are styled using CSS modules and CSS properties, without any specific UI library. I've tried best to match values of element styles with given Figma.

## Components
Common components (i.e. Button, TextInput, Select) are reusable, and created in such a way, which can easily support new customizations for future expansion of the project


## Application Data
For now, there is App wide context and reducer which is used to store and manage data for the questionnaire form

### useAppState
A hook used to retrieve value of application state

### useAppDispatch
A hook used to dispatch actions, which allows to manage/update application state data


## Question
As the question can have multiple type of Answers(i.e. Short, Paragraph, Checkboxes, Multiple choices, etc), but for now we've implemented Short Answer Type only. To add/implement other types of answers we can add them as enum in ANSWER_TYPES Enum (`src\types\form.ts`), which is used to create dropdown options in the question form, and can conditionally render different types of elements for answer (instead of TextInput).