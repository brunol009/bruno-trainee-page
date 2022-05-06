import {useContext} from "react"
import { 
    Flex,
    Box,
    Grid,
    Image,
    Text,
    Divider,
    Heading,
    
 } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import characterData from "../data/characterData.json"
import {Context} from "../Context"

function CharacterDescription(){

   const param = useParams()
   const {isAllie} = useContext(Context)
   const character = characterData.filter(cha => cha.id === param.id)

   const portada = character.map(cha => {
       return( 
        <Flex w="100%" flexDirection="column" alignItems="center" fontFamily={"Raleway"}>
            <Flex flexDirection="column" alignItems="center">
                <Image minH="200px" maxHeight={"450"}  src={cha.wall}/>
                
                <Heading>{cha.name}</Heading>
            </Flex>
            <Divider/>
            <Box maxH="350px"  m="30px 0">
                <Image maxH="350px" borderRadius={"10px"} objectFit="cover" src={cha.photo}/>
            </Box>
            <Box borderRadius={"10px"} maxWidth="700px" bg={isAllie ? "yellow.700" : "red.900"} m="10px 30px" p="10px 50px">
                <Grid p="10px 0" alignItems="center" flexDirection="row" w="100%">
                    <Text p="5px 0px" fontSize={"17px"}>Iformacion General</Text>
                    <Text p="5px 0px" fontSize={"12px"}>{cha.desc}</Text>
                </Grid>
                <Divider/>
                <Grid p="10px 0" alignItems="center" flexDirection="row" w="100%">
                    <Text p="5px 0px" fontSize={"17px"}>Nombre Verdadero</Text>
                    <Text p="5px 0px" fontSize={"12px"}>{cha.realName}</Text>
                </Grid>
                <Divider/>
                <Grid p="10px 0" alignItems="center" flexDirection="row" w="100%">
                    <Text p="5px 0px" fontSize={"17px"}>Habilidades</Text>
                    <Text p="5px 0px" fontSize={"12px"}>{cha.powers}</Text>
                </Grid>
                <Divider/>
                <Grid p="10px 0" alignItems="center" flexDirection="row" w="100%">
                    <Text p="5px 0px" fontSize={"17px"}>Primera Aparicion</Text>
                    <Text p="5px 0px" fontSize={"12px"}>{cha.firstAppearance}</Text>
                </Grid>

            </Box>
        </Flex>
        )
   })
    return(
        <Box bg={isAllie ? "#D4A30C" : "#CF010B"} color="white">
            <Flex>
                {portada}
            </Flex>
        </Box>
    )
}

export default CharacterDescription

