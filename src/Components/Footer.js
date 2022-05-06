import React from "react"
import {Text, Container} from "@chakra-ui/react"

function Footer(){
    return(
        <Container
            maxW={'6xl'}
            py={4}
            spacing={4}>
            <Text fontSize="11px">© 2022 Practica Letelle Bruno</Text>
        </Container>
    )
}

export default Footer