import React from "react";
import "./Faq.scss"
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon, Flex, Box,
} from "@chakra-ui/core";

function Faq() {

    return (
        <Flex className="border" align="center" justify="center" direction="column" bg="#F8F8F8" padding="4%">
            <h3>Frequently asked questions</h3>
            <Accordion width={["sm", "md", "lg", "xl"]} p={[2, 4, 6, 8]}>
                <AccordionItem className="click" mb="2">
                    <AccordionHeader className="click accordion-header" _expanded={{boxShadow: "none"}}>
                        <Box flex="1" textAlign="left">
                            Why should you use a password manager for business?
                        </Box>
                        <AccordionIcon/>
                    </AccordionHeader>
                    <AccordionPanel pb={4}>
                        Running a business comes with managing a lot of different devices and accounts. The easiest
                        way to keep track of their login credentials is to use a password manager.
                        <br/>
                        With a password manager, your employees can store all their logins in one place, share them
                        with coworkers, and access them on multiple devices with one password only. No excuse for
                        forgetting passwords after a long vacation or for sharing passwords via email!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="click" mb="2">
                    <AccordionHeader className="click accordion-header" _expanded={{boxShadow: "none"}}>
                        <Box flex="1" textAlign="left">
                            How to choose the best password manager for business?
                        </Box>
                        <AccordionIcon/>
                    </AccordionHeader>
                    <AccordionPanel pb={4}>
                        Choosing the best product depends on your business needs. We would recommend paying
                        attention to three key areas:
                        <ul>
                            <li>
                                Security standards. Check the encryption algorithm. The stronger it is, the more
                                difficult it is to break it. NordPass, for example, uses XChaCha20, the latest
                                algorithm praised by cybersecurity experts. Also, check whether the service provider
                                has a zero-knowledge policy and cannot access your passwords.
                            </li>
                            <li>
                                Features. Decide on what features are necessary. Most password managers will offer
                                autosave and autofill, encryption, and password sharing by default. But some will
                                provide you with extra: imports from other platforms, biometrics, and desktop apps.
                            </li>
                            <li>
                                Reputation. Do other companies praise it? Who designed the app? Has it been audited?
                                Answering these questions will help you decide whether you can trust the password
                                manager you’ve chosen.
                            </li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="click">
                    <AccordionHeader className="click accordion-header" _expanded={{boxShadow: "none"}}>
                        <Box flex="1" textAlign="left">
                            How can I get a business password manager?
                        </Box>
                        <AccordionIcon/>
                    </AccordionHeader>
                    <AccordionPanel pb={4} className="accordion-text">
                        To further discuss whether NordPass fits your business needs, please fill in the form below.
                        We will contact you directly and answer all your questions.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>


    );
}

export default Faq;