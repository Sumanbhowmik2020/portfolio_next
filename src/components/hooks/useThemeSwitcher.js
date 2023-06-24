import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref =window.localStorage.getItem("theme");
        //window.localStorage.setItem("theme","userPref");

        const handleChange = () => {
            if(userPref){
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                // window.localStorage.setItem(
                //     "theme",
                //     check
                // );
                if(check === "dark"){
                    document.documentElement.classList.add("dark");
                    //window.localStorage.setItem("theme",check);
                    console.log("theme changed")
                } else {
                    document.documentElement.classList.remove("dark")
                    console.log("error a")
                } 
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                console.log("error b")
                window.localStorage.setItem(
                    "theme",
                    check
                );


                if(check === "dark"){
                    document.documentElement.classList.add("dark");
                    console.log("Dark theme")
                } else {
                    document.documentElement.classList.remove("dark");
                    console.log("error d")
                }
            }
        }

        handleChange();

        
        mediaQuery.addEventListener("change",handleChange);

        
        return () => mediaQuery.removeEventListener("change",handleChange);

    }, [])

    useEffect(() => {
        if(mode === "dark"){
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark");
            console.log("theme changed 2")
        } 
        if(mode ==="light") {
            //console.log(mode)
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark");
            console.log("error c")
        }

    },[mode]);


    return [mode,setMode]
}

export default useThemeSwitcher;