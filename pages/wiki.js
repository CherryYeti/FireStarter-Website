import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-item"
import Footer from "../components/footer"
import iconArch from "../public/images/icons/arch.png"
import iconFedora from "../public/images/icons/fedora.png"
import iconMac from "../public/images/icons/macos.png"
import iconSuse from "../public/images/icons/suse.png"
import iconUbuntu from "../public/images/icons/ubuntu.png"
import iconWindows from "../public/images/icons/windows.png"
import Layout from "../components/layouts/article"
import Paragraph from "../components/paragraph"
import Section from '../components/section'

const wiki = () => {
    return (
        <Layout title="Getting Started">
            <Container maxW="container.md">
                <Heading as="h3" fontSize={28} mb={4}>
                    Getting Started
                </Heading>
                <Section delay={0.1}>
                    <Heading as="h2" fontSize={20} mb={4}>
                        Operating System
                    </Heading>
                    <p>
                        Click on the link below that matches your operating system.
                    </p>
                </Section>
                <Section delay={0.2}>
                    <SimpleGrid columns={[1, 1, 3]} gap={6}>
                        <WorkGridItem id="windows" title="Windows" thumbnail={iconWindows} />
                        <WorkGridItem id="macos" title="MacOS" thumbnail={iconMac} />
                        <WorkGridItem id="ubuntu" title="Ubuntu" thumbnail={iconUbuntu} />
                        <WorkGridItem id="arch" title="Arch" thumbnail={iconArch} />
                        <WorkGridItem id="fedora" title="Fedora" thumbnail={iconFedora} />
                        <WorkGridItem id="suse" title="OpenSuse" thumbnail={iconSuse} />
                    </SimpleGrid>
                </Section>
                <Section delay={0.3}>
                    <Footer />
                </Section>
            </Container>
        </Layout>
    )
}

export default wiki