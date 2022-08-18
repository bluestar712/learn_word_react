import {AuthActionCreators} from "./auth/action-creators";
import {EventActionCreators} from "./event/action-creators";
import {WordsActionCreators} from "./words/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators,
    ...WordsActionCreators
}
