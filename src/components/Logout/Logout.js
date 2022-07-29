import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from '../../services/userService'

export const Logout = () => {

    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        userService.logout(user.accessToken)
        userLogout();
    })

    return null;
}