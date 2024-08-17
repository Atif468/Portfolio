import { createContext, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const info = {
        name,
        email,
        message,
        setEmail,
        setMessage,
        setName,
    }
    return (
        <Context.Provider  value={info}>
            {props.children}
        </Context.Provider>
    )
}