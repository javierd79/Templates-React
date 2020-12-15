import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from './themeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const handleClick = () => {
        if (theme === 'dark') setTheme('light');
        if (theme === 'light') setTheme('dark');
    };

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <HiSun
                    onClick={handleClick}
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            ) : (
                    <HiMoon
                        onClick={handleClick}
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                )}
        </div>
    );
};

export default Toggle;