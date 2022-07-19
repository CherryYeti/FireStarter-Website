import { BioSection, BioYear } from '../components/bio'
import { Box, Button, Container, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Footer from '../components/footer'
import Layout from '../components/layouts/article'
import Links from '../components/links'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = () => {
    return (
        <Layout title="Homepage">
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Welcome to FireStarter!
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            FireStarter
                        </Heading>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        What is FireStarter?
                    </Heading>
                    <Paragraph>
                        Firestarter is a free and open source discord bot created to start, stop, and manage your servers.
                    </Paragraph>
                    <Heading as="h3" variant="section-title">
                        Who made it?
                    </Heading>
                    <Paragraph>
                        FireStarter was created and maintained by me! You can view my <Link href="https://portfolio-cherryyeti.vercel.app/"><u>Website</u><ExternalLinkIcon /></Link> for more projects
                    </Paragraph>
                    <Heading as="h3" variant="section-title">
                        Is it safe?
                    </Heading>
                    <Paragraph>
                        FireStarter is completely open source! You are welcome to browser through the code at <Link href="https://www.github.com/CherryYeti/FireStarter" target="_blank"><u>https://www.github.com/CherryYeti/FireStarter</u><ExternalLinkIcon /></Link>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/wiki">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
                                Get Started
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Links />
                </Section>
                <Section delay={0.3}>
                    <Footer />
                </Section>
            </Container>
        </Layout>
    )
}
export default Page