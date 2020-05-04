import React from 'react';
import Flex from "@chakra-ui/core/dist/Flex";
import Box from "@chakra-ui/core/dist/Box";

function footer() {
    return (
        <Flex direction="row" justifyContent="space-between" p={[2, 4, 6, 8]} pl={["2rem", "4rem", "6rem", "9rem"]}
              pr={["2rem", "4rem", "6rem", "9rem"]}>

            <Box>
                <p><a className="engage" href="/">Engage</a></p>
                <p><a href="/">Privacy Policy</a></p>
                <p><a href="/">Terms of Service</a></p>
            </Box>
            <Box display="flex" alignItems="right" mt="4.4rem">
                <p className="copyright">Copyright © 2019 NordPass.</p>
            </Box>
        </Flex>
    );
}

export default footer;