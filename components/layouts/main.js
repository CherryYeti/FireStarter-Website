import { Box, Container } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import Navbar from '../navbar.js'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14} />
            {children}
        </Box>
    )
}
export default Main