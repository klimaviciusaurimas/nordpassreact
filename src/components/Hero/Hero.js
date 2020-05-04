import React from 'react';
import {Flex, Box, Image} from "@chakra-ui/core";

function Hero() {
    const property = {
        imageUrl: "assets/np-hero-image.png",
        imageAlt: "NordPass laptop and phone",
    };

    return (
        <Flex className="layout background-fade" pt="5%" pb="5%">
            <Box p={[2, 4, 6, 8]}>
                <h2>Get your passwords <br/> organized</h2>
                <button className="main-buttons">Get started</button>
            </Box>
            <Box>
                <Image src={property.imageUrl} alt={property.imageAlt} maxW="xl" className="nordpass-hero-image"/>
            </Box>
        </Flex>
    );
}

export default Hero;