import {useContext} from "react"
import {
    Text,
    Flex,
    Image,
    Spacer,
    Center
  } from '@chakra-ui/react'
import logo from "../images/batman.png"
import {Link as RouteLink} from "react-router-dom"
import {Context} from "../Context"

function Bar(){
    const {ingreso, balance} = useContext(Context)
    
    return(
        ingreso ?
        <Flex bg='white' height={70} fontSize='20px'>
            
            <Spacer />
            
            <Image src={logo} color='white' />
            <Spacer />
            <Center>
                <RouteLink to='/'>
                    <Text color='black'>Baticueva</Text>
                </RouteLink>
            </Center>
            <Spacer />
            <Center>
                <RouteLink to='/Allies' onClick={() => balance(true)}>
                    <Text color='black'>Aliados</Text>
                </RouteLink>
            </Center>
            <Spacer />
            <Center>
                <RouteLink to='/Villans' onClick={() => balance(false)}>
                    <Text color='black'>Villanos</Text>
                </RouteLink>
            </Center>
            <Spacer />
            <Center>
                <RouteLink to='/MiniGame'>
                    <Text color='black'>MiniJuego</Text>
                </RouteLink>
                </Center>
                <Spacer />
                
        </Flex>
        : 
        <Flex bg='white' height={70} fontSize='20px'>
            <Spacer />
            <Image src={logo} color='white' />
            <Spacer />
            <Center>
                <RouteLink to='/'>
                    <Text color='black'>Baticueva</Text>
                </RouteLink>
            </Center>
            <Spacer />
        </Flex>
        
    )
}

export default Bar