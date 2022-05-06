import { 
    Text,
    Container,
    Flex,
    Image,
    Center,
    Spacer,
    Grid,
    Button,
 } from "@chakra-ui/react"
import {useContext} from "react"
import characterData from "../data/characterData.json"
import {Context} from "../Context"
import {Link as RouteLink} from "react-router-dom"

function Characters(){
    
    const {isAllie} = useContext(Context)
    
    const char = characterData.filter(ch => ch.isAllie === isAllie)
    
    const portada = char.map(c => {
        return( 
               <Flex w="100%">
                   <Image h="450px" objectFit="cover" src={c.photo} />
               </Flex>
            )
    })
    
    const aliados = char.map(c => {
        return( 
            <Center>
            <Container marginTop="5px" bg="black" boxShadow={isAllie ? "5px 5px 5px #D4A30C" : "5px 5px 5px #CF010B"} fontFamily="Raleway">
                <Flex centerContent >
                    <Center >
                        <Image m="15px 0" boxShadow="2px 5px 5px black" borderRadius="2px" boxSize="200px" objectFit="cover" src={c.photo} />
                        
                        <Text margin="20px 0"fontSize="15px" paddingLeft="25px">{c.res}</Text>
                    </Center>
                </Flex>
                <Flex centerContent>
                        <Text marginBottom="3px">{c.name}</Text>
                        <Spacer/>
                        <RouteLink to={isAllie ? `/Allies/${c.id}` : `/Villans/${c.id}`}>
                            <Button color="black" fontSize="13px" bg={isAllie ? "#D4A30C" : "#CF010B"} h="17px">Ver Perfil</Button>
                        </RouteLink>
                </Flex>
                
            </Container>
            </Center>
            
            )
        })

    return(
        <Grid bg={isAllie ? "#D4A30C" : "#CF010B"}>
            <Flex>
                {portada}
            </Flex>
            <Grid color="white">
                    {aliados}
            </Grid>
        </Grid>
        
    )
}

export default Characters