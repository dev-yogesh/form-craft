import { TextFieldFormElement } from "./fields/TextField";
import { TitleFieldFormElement } from "./fields/TitleField";
import { SubTitleFieldFormElement } from "./fields/SubTitleField";
import { ParapraphFieldFormElement } from "./fields/ParagraphField";
import { SeparatorFieldFormElement } from "./fields/SeparatorField";
import { SpacerFieldFormElement } from "./fields/SpacerField";
import { NumberFieldFormElement } from "./fields/NumberField";
import { TextAreaFormElement } from "./fields/TextAreaField";

export type ElementsType =
  | "TextField"
  | "TitleField"
  | "SubTitleField"
  | "ParagraphField"
  | "SeparatorField"
  | "SpacerField"
  | "NumberField"
  | "TextAreaField";

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FromElementInstance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC<{
    elementInstance: FromElementInstance;
  }>;
  formComponent: React.FC<{
    elementInstance: FromElementInstance;
    submitValue?: SubmitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  propertiesComponent: React.FC<{
    elementInstance: FromElementInstance;
  }>;

  validate: (formElement: FromElementInstance, currentValue: string) => boolean;
};

export type FromElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
  TitleField: TitleFieldFormElement,
  SubTitleField: SubTitleFieldFormElement,
  ParagraphField: ParapraphFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,
  NumberField: NumberFieldFormElement,
  TextAreaField: TextAreaFormElement,
};
