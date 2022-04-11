import { UIInitialize } from "./ui_initialize";
import { UIButtonBehavior } from "./ui_buttonbehavior";
import { UIUpdate } from "./ui_update";
import { QuestionInitialize } from "./question_initialize";
import { GameInitialize } from "./game_initialize";
import { QuestionAnswering } from "./question_answering";

export default [
    GameInitialize,
    QuestionInitialize,
    UIInitialize,
    UIUpdate,
    UIButtonBehavior,
    QuestionAnswering,
];