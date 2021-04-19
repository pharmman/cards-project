import React, {ReactNode} from "react";
import { Redirect } from "react-router-dom";
import {ForgotPage} from "../../../../a-2-features/f-1-auth/a-3-forgot/f-1-ui/ForgotPage";
import {RegisterPage} from "../../../../a-2-features/f-1-auth/a-2-register/r-1-ui/RegisterPage";
import {LoginPage} from "../../../../a-2-features/f-1-auth/a-1-login/l-1-ui/LoginPage";
import {NewPasswordPage} from '../../../../a-2-features/f-1-auth/a-3-forgot/f-1-ui/NewPasswordPage'

export type PageType = {
    _id: number;
    title: string;
    path?: string;
    params?: string;
    exact?: boolean;
    page: ReactNode;
};

export const PATH = {
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: "/profile",
    FORGOT: "/forgot",
    SET_PASS: "/set-new-password/:token",
    PACKS: "/packs",
    CARDS: "/cards",
};

export const pages:PageType[] = [
    {_id: 0, title: "main", path: "/", exact: true, page: <Redirect to={PATH.LOGIN}/>},
    {_id: 1, title: "login", path: PATH.LOGIN, exact: true, page: <LoginPage/>},
    {_id: 2, title: "register", path: PATH.REGISTER, exact: true, page: <RegisterPage/>},
    {_id: 3, title: "forgot", path: PATH.FORGOT, exact: true, page: <ForgotPage/>},
    {_id: 4, title: "newPassword", path: PATH.SET_PASS, exact: false, page: <NewPasswordPage/>},
]