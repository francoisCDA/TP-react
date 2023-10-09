import { useRouteError } from "react-router-dom";
import { Heading, Text } from "@radix-ui/themes";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <Heading as="h1">Error {error.status}</Heading>
            <Text as="p">{error.data}</Text>
        </>
    )
}

export default ErrorPage