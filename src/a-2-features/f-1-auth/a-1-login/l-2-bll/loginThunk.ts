import { Dispatch } from "redux";
import { LoginDataType } from "../l-3-dal/LoginAPI";
import { setIsFetching } from "./loginActionsType";

const loginTC = (data:LoginDataType) => (dispatch:Dispatch) => {
    dispatch(setIsFetching(true))
}