import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const url = import.meta.env.VITE_URL;


    useEffect(() => {
        const fetchUser = async () => {

            const token = localStorage.getItem('accessToken');
            if (!token) {
                console.log("No valid token found");
                
            } else {
                try {
                    const response = await axios.get(`${url}/api/users/currentUser`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(response.data);
                    // navigate("/");
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchUser();
    }, []);

    const signup = async (name, email, password) => {
        console.log(name, email);
        try {
            const response = await axios.post(`${url}/api/users/signup`, { name, email, password });
            // console.log(response)
            if (response.status === 200) {
                const { accessToken, user } = response.data.data;
                // console.log(response.data.data)
                if (accessToken) {
                    localStorage.setItem('accessToken', accessToken);
                }

                setUser(user);
                navigate("/");
            }

            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (email, password) => {

        try {
            const response = await axios.post(`${url}/api/users/login`, { email, password });
            console.log("login", response);
            if (response.status === 200) {
                const { accessToken, user } = response.data.data;
                console.log(response.data.data)
                if (accessToken) {
                    localStorage.setItem('accessToken', accessToken);
                }

                setUser(user);
                navigate("/");
            };
        } catch (err) {
            console.error(err);
        }
    }

    const logout = async() => {
        await axios.post(`${url}/api/users/logout`);
        localStorage.removeItem('accessToken');
        setUser(null);
        // navigate("/login");
    }


    return (
        <UserContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}
UserProvider.propTypes = {
    children: PropTypes.node,
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);