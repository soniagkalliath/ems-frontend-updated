import React,{useState,createContext} from 'react'
export const addData = createContext();

function ContextProvider({children}) {
    
    const [useradd, setUseradd] = useState("");
    // const [update, setUpdate] = useState("");
    // const [deletedata, setDLtdata] = useState("");

    return (
        <>
            <addData.Provider value={{ useradd, setUseradd }}>
            {children}
            {/* children: A function. React will call the function you pass with the current context value determined by the same algorithm as useContext() does, and render the result you return from this function. React will also re-run this function and update the UI whenever the context from the parent components changes. */}
                {/* <updateData.Provider value={{ update, setUpdate }}>
                    <dltdata.Provider value={{deletedata, setDLtdata}}>
                        {children}
                    </dltdata.Provider>
                </updateData.Provider> */}
            </addData.Provider>
        </>
    )
}

export default ContextProvider