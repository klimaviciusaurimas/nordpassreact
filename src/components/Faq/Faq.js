import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Example() {
    return (
        <div className="faq-section">
            <h2>Frequently asked questions</h2>
            <Accordion className="accordion">
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Why should you use a password manager for business?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Running a business comes with managing a lot of different devices and accounts. The easiest
                            way to keep track of their login credentials is to use a password manager.
                            <br/>
                            With a password manager, your employees can store all their logins in one place, share them
                            with coworkers, and access them on multiple devices with one password only. No excuse for
                            forgetting passwords after a long vacation or for sharing passwords via email!
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How to choose the best password manager for business?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
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
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How can I get a business password manager?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            To further discuss whether NordPass fits your business needs, please fill in the form below.
                            We will contact you directly and answer all your questions.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>

    );
}