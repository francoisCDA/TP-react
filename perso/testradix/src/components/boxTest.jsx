import { Flex, Grid, Box } from '@radix-ui/themes';
import DecorativeBox from './decorativebox';

const BoxTest = () => {

    return (
        <Grid columns="4" gap="3">
        <Flex direction="column" gap="3">
            <Box height="9">
                <DecorativeBox />
            </Box>
            <Box height="9">
                <DecorativeBox />
            </Box>
            <Box height="9">
                <DecorativeBox />
            </Box>
        </Flex>

        <Flex direction="column" gap="3">
            <Box grow="1">
            <DecorativeBox />
            </Box>
            <Box height="6">
            <DecorativeBox />
            </Box>
        </Flex>
        <Flex direction="column" gap="3">
            <Box grow="1">
            <DecorativeBox />
            </Box>
            <Box height="6">
            <DecorativeBox />
            </Box>
            <Box height="6">
            <DecorativeBox />
            </Box>
        </Flex>

        <Flex direction="column" gap="3">
            <Box height="9">
                <DecorativeBox />
            </Box>
            <Box height="9">
                <DecorativeBox />
            </Box>
            <Box height="9">
                <DecorativeBox />
            </Box>
        </Flex>

        </Grid>

    )


}

export default BoxTest