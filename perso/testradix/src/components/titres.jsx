import { Flex, Text, Button, Heading } from '@radix-ui/themes';

const Titre = () => {

    return (
        <>
            
            <Heading as="h1" size="9">Hello world</Heading>

            <Flex direction="column" gap="2">
                <Text>Hello From Radix Themes :)</Text>
                <Button>Yo !</Button>

            </Flex>
        </>
    )
}

export default Titre