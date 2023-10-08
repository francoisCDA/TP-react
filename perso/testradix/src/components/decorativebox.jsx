import { Flex, Button, Box } from '@radix-ui/themes'

import styles from './decorativebox.module.css'

const DecorativeBox = () => {

    return (
        <Flex direction="column">
            <Button><strong>Click</strong> me !</Button>
            <Box height="9" className={styles.fondbleu}></Box>
 
            <Button><strong>Click</strong> me !</Button>
        </Flex>
    )
}

export default DecorativeBox