import {useContext} from "react"
import {
    Text,
    Container,
    Box,
    Image,
    Button,
    Flex
    
  } from '@chakra-ui/react'
import {Context} from "../Context"

function Batcave(){
    const {inicio, ingresa, habla} = useContext(Context)

    return(
        <Flex bg="black">
            <Container centerContent fontFamily="Raleway">
                <Box marginTop="130px">
                    <Image borderRadius="20px" boxSize="350px" objectFit="cover" src={"https://www.dccomics.com/sites/default/files/styles/comics320x485/public/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?itok=O3UVj2Np"} />
                </Box>{
                    inicio ?
                <Text p="20px" color="white">
                    {habla}
                </Text> :
                <Text p="20px" color="white">
                    Deseas entrar a la Baticueva?
                </Text>}
                { !inicio ?
                <Flex marginBottom="200px">
                    <Button h="22px" onClick={() => ingresa(true)} marginRight="10px"  color="black" bg="#D4A30C">
                        Si..
                    </Button>
                    <Button h="22px" onClick={() => ingresa(false)} marginLeft="10px" color="black" bg="#D4A30C">
                        No por ahora..
                    </Button>
                </Flex>
                :
                <Flex marginBottom="240px"></Flex>}

            </Container>
        </Flex>
    )
}

export default Batcave