import {useState} from "react"
import { Text, Box, Grid, Center, Flex, Button} from "@chakra-ui/react"

function MiniGame(){
    const [palabra, setPalabra] = useState(palabraRandom())
    const [tablero, setTablero] = useState([])
    const [letra, setLetra] = useState(0)
    const [enJuego, setEnJuego] = useState(false)
    const [tabUp, setTabUp] = useState(false)
    const [indice, setIndice] = useState(0)
    const [puntos, setPuntos] = useState(0)
    const [termino, setTermino] = useState(false)

    //GENERADOR DE TABLERO INICIAL 
    function iniciarJuego(){
        setEnJuego(true)
        setIndice(0)
        setTablero(crearTablero)
        setPalabra(palabraRandom)
    }
    function palabraRandom(){
        const pa = []
        const words = ["BATMAN", "ROBIN", "PINGUINO", "JOKER", 
                        "GUASON", "BATWOMAN","NIGHTWING",
                        "GOTICA", "GATUBELA", "BATICUEVA", "BATIMOVIL"]
        
        for(let i = 0; i < words.length; i++){
            pa.push({
                pal: words[i],
                arr: words[i].split(""),
                size: words[i].length
            })
        }
        return pa[Math.floor(Math.random()*5)]
    }
    
    
    function crearTablero(){
        const tab = []
        const pal = []
        for(let i=0;i<palabra.size;i++){
         pal.push(" ")
        }
        for(let j=0;j<5;j++){
         tab.push(pal)
        }
        setTabUp(true)
        return tab
    }

    // FUNCION DE COLOR DE FONDO DE LAS CELDAS
    function colorFondo(col, i, j){
        const fondo = []
        // si esta dentro del chequeo y es del indice anterior mayor al actual
        if(indice-1 >= i){
            for(let k = 0; k<palabra.size; k++){
                // Chequeo que la palabra este en el lugar correcto y sean iguales (verde)
                if(col === palabra.arr[k] && k === j){
                    fondo.push("green.100")
                } else 
                // Si la incluye y no esta en el mismo lugar (amarillo)
                    if(palabra.arr.includes(col) && col !== palabra.arr[k] 
                        && palabra.arr[k] !== " "){
                       fondo.push("yellow.100")
                } else fondo.push("white")
            }
        } else fondo.push("white")
        return fondo[j]
    }


    //FUNCION DE REEMPLAZO DE CARACTERES DENTRO DEL TABLERO
    function reemplazo(indice, letra, arr, caracter){
        const fila = [...arr[indice]]
        fila.splice(letra,1, caracter)
        arr[indice] = fila
        return arr
    }

    function handleKeyDown(event){ // USUARIO PRESIONA UNA TECLA
        
        if(enJuego){ 
        // BORRA LA CELDA Y LA DEJA EN BLANCO
        if(event.key === 'Backspace'){   
            setTablero(prevTablero => {
                return reemplazo(indice,letra-1,[...prevTablero], ' ')
            })   
            //VUELVE A LA LETRA DONDE ESTABA
            if(letra > 0){              
                setLetra(prevLetra => prevLetra - 1)
            } 
        } 
        // TOMA LAS TECLAS QUE NO SEAN ESPACIOS U OTROS VALORES DE MAYOR LONGITUD QUE UNO
        else if(event.key.length === 1 && event.key !== " " &&  letra < palabra.size){
            setTablero(prevTablero => {
                return reemplazo(indice,letra,[...prevTablero], event.key.toUpperCase())
            })
            // AUMENTA EL INDICADOR DE LETRA
            if(letra<palabra.size){
                setLetra(prevLetra => (prevLetra + 1))
                }
        // SI SE LLEGO AL FINAL DE LA PALABRA Y SE PRESIONA ENTER ENTRA ACA
        } else if(letra === palabra.size && event.key === "Enter" && indice < 5){
            //CHEQUEO SI SE GANO Y REINICIO
            if(indice+1 > 0){
                const fila = tablero[indice].join("")
                if(fila === palabra.pal){
                    setEnJuego(false)
                    setTermino(true)
                    setPuntos(100-(indice)*20)
                }
                if(fila !== palabra.pal && indice === 4){
                    setPuntos(0)
                }
            }
            
            //AUMENTA EL INDICE DE FILA
            if(indice <5){
                setIndice(prevIndice => (prevIndice + 1))
                setLetra(() => (0))}
            // SI ES LA ULTIMA FILA FINALIZA EL JUEGO
            if(indice === 4){
                setEnJuego(false)
            }
        }
    }}

    const juego = tablero.map((fila, i)=> {
        return(
        <Flex flexDirection="row">
            {fila.map( (col,j) =>
                { return(
                    <Box bg={colorFondo(col,i,j)} m ="3px" justifyContent="center"  h="50px" w="50px" border="solid 1px black">
                    <Center>
                        <Text p="9px" fontSize={"20px"} textAlign={"center"}>{col}</Text>
                    </Center>
                    </Box>)
                }
            )}
        </Flex>  
        )
    })

    return(
        <Grid tabIndex="0" onKeyDown={e => handleKeyDown(e)} h="600px" m="0 100px" justifyContent="center" alignItems="center" alignContent={"center"} >
            <Text  m="30px" >Encuentra la palabra escondida en el menor numero de intentos posible</Text>
            <Flex alignItems="center" flexDirection="column">
                {tabUp && juego}
                <Text m="30px">Puntos: {puntos}</Text>
                {!termino && <Button isDisabled={enJuego} alignItems="center" w="350px" onClick={() => iniciarJuego()}>
                {!enJuego ? "Iniciar Juego" : "Jugando" }</Button>}
            </Flex> 
        </Grid>    
        )
}

export default MiniGame



