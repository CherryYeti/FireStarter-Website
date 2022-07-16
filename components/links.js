import { Heading, List, ListItem, Button, Link } from "@chakra-ui/react"
import { IoLogoGithub } from "react-icons/io5"
import Section from "./section"

const Links = () => {
    return (
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                On the web
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://github.com/CherryYeti" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="blue"
                            leftIcon={<IoLogoGithub />}
                        >
                            @CherryYeti
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </Section>
    )
}
export default Links