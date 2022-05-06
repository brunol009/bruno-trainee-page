import React from "react"

const Context = React.createContext()

function ContextProvider({children}){

    const [ingreso, setIngreso] = React.useState(false)
    const [habla, setHabla] = React.useState("...")
    const [inicio, setInicio] = React.useState(false)
    const [isAllie, setIsAllie] = React.useState(true)

    const fraseSi = ["Esta bien...", "Pero no toques nada.."]
    const fraseNo = ["Perfecto..", "Un problema menos"]

    function ingresa(ing){
        setIngreso(ing)
        setInicio(true)
        if(ing){
            fraseSi.forEach((fra,i) => {
                setTimeout(() => {
                    console.log("lala")
                    setHabla(fra)
                }, i*1500);
            })
            
        } else 
        fraseNo.forEach((fra,i) => {
            setTimeout(() => {
                console.log("lala")
                setHabla(fra)
            }, i*3000);
        })
    }

    function balance(alli){
        setIsAllie(alli)
    }

    React.useEffect(() => {},[habla])


    return(
        <Context.Provider value={{ingreso, ingresa, habla, inicio, balance, isAllie}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}