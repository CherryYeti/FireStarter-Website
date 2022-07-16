import { BioSection, BioYear } from '../components/bio'
import { Box, Button, Container, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
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
                    Hello, I&apos;m a college student and arch linux enthusiast!
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Jason Javandel
                        </Heading>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Hello! I am a 17 year old freshman at the University of California, Merced.
                        I am majoring in computer science, and I love creating!
                        My most recent project that I have taken up is {' '}
                        <NextLink href="/works/firestarter">
                            <Link>Firestarter</Link>
                        </NextLink>.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/wiki">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                                Stuff I've made
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2004</BioYear>
                        Born in Oakland, California
                    </BioSection>
                    <BioSection>
                        <BioYear>2013</BioYear>
                        Introduced to programming
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Found a passion for coaching baseball teams
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Started development on  {' '}
                        <NextLink href="/works/firestarter"><Link>Firestarter</Link>
                        </NextLink>
                    </BioSection>
                    <BioSection>
                        <BioYear>2022-</BioYear>
                        Attending the University of California Merced, studying Computer Science
                    </BioSection>
                </Section>
                <Links />
                <Footer />
            </Container>
        </Layout>
    )
}
export default Page