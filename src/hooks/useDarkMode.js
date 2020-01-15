import React from 'react';
import {useEffect} from 'react'
import { useLocalStorage} from "./useLocalStorage";


export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage(false, false);

    const darkMode = useEffect(() => {
        if (someValue) {
            document.body.className = 'dark-mode'
        }
        else {
            document.body.className = ''
        }

    },[someValue]);

    const setDarkMode = () => {
        setSomeValue(!someValue)
    };

    return [darkMode, setDarkMode];
};