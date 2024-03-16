import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie'; 

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const userCookie = Cookies.get('psy_user'); // Use Cookies.get() to retrieve a cookie
        if (userCookie) {
            setUser(userCookie);
        }
    }, []);

    useEffect(() => {
        if (user) {
            Cookies.set('psy_user', user, {
                expires: 2, // Expires in 2 days
                path: '/',
            });
        }
    }, [user]);

    useEffect(() => {
        if (user !== '') {
            setUserData(user);
        } else {
            setUserData({});
        }
    }, [user]);

    const value = useMemo(
        () => ({
            user,
            setUser,
            userData,
        }),
        [user, userData],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
