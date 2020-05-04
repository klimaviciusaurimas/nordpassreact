import React from "react";
import {useForm} from "react-hook-form";
import {
    Flex, Box, Image,
} from "@chakra-ui/core";

function Business() {
    const property = {
        imageUrl: "assets/np-form-image.png",
        imageAlt: "NordPass laptop",
    };
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        console.log(data);
    }; // your form submit function which will invoke after successful validation

    console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <Flex align="center" direction="column" bg="#EDF8F7">
            <h2>Get NordPass for business</h2>
            <Flex className="layout" align="center" justify="center">
                <Box>
                    <Image className="nordpass-business-image" src={property.imageUrl} alt={property.imageAlt}/>
                </Box>
                <Box>
                    <Flex align="center" justify="center" direction="column" padding="4%">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="form-details">Fill out your details, and we will get back to you
                                shortly:</label>
                            <input
                                name="name"
                                placeholder="Name"
                                ref={register({required: true})}
                            />
                            {errors.name && <p>This field is required</p>}
                            <input
                                name="email"
                                placeholder="Email"
                                ref={register({
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                            />
                            {errors.email && errors.email.type === "required" && (
                                <p>This field is required</p>
                            )}
                            {errors.email && errors.email.type === "pattern" && (
                                <p>Email format is not valid</p>
                            )}

                            <textarea
                                name="notes"
                                placeholder="Notes"
                                ref={register({required: false})}
                            />
                            <label className="form-info">This information will be used by NordPass to respond to
                                your <br/> inquiry as provided in our <a href="/">Privacy Policy.</a></label>
                            <button className="main-buttons" type="submit">Get started</button>
                        </form>
                    </Flex>
                </Box>
            </Flex>
        </Flex>

    );
}

export default Business;
