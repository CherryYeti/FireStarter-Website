import { Container, Heading, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { IoLogoNodejs, IoLogoDiscord } from "react-icons/io5"
import { SiOpensuse } from "react-icons/si"
import Footer from "../../components/footer"
import Layout from "../../components/layouts/article"
import Paragraph from "../../components/paragraph"
import Section from "../../components/section"

const suse = () => {
    return (
        <Layout title="OpenSuse Install">
            <Container>
                <Section delay={0.1}>
                    <Heading as="h3" fontSize={28} mb={4} display="inline-flex" alignItems="left">
                        <SiOpensuse/>&nbsp;OpenSuse Installation
                    </Heading>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h2" fontSize={20} mb={4} variant="section-title" display="inline-flex" alignItems="left">
                        1. Installing Node.js<IoLogoNodejs />
                    </Heading>
                    <Paragraph>
                        In order to run Firestarter, you first need to install the current version of NodeJS,
                        do so by opening the terminal and typing <i>zypper install nodejs18</i>
                    </Paragraph>
                    <p />
                </Section>
                <Section delay={0.3}>
                    <Heading as="h2" fontSize={20} mb={3} variant="section-title">
                        2. Installing Java Runtimes
                    </Heading>
                    <Paragraph>
                        Personally, I recommend installing the Openjdk releases of java, as that is what I have used.
                        You need to install both Java 8 and Java 18 for Firestarter to launch all versions of minecraft.
                    </Paragraph>
                    <Heading as="h2" fontSize={20} mb={3} >
                        Install java 8 and 18
                    </Heading>
                    <i>sudo zypper in java-1_8_0-openjdk java-18-openjdk</i>
                    <p />
                </Section>
                <Section delay={0.4}>
                    <Heading as="h2" fontSize={20} mb={3} variant="section-title">
                        3. Downloading the code
                    </Heading>
                    <ol>
                        <li>Type <i>git clone https://github.com/CherryYeti/FireStarter/</i> into the terminal</li>
                        <p>
                            Once you have downloaded the code, you are going to need to install some of FireStarter's dependencies, to do so,
                        </p>
                        <p />

                        <li>Open the folder that you cloned in the terminal</li>
                        <li>Type <i>npm i</i> into the terminal to install the dependencies</li>
                    </ol>
                </Section>
                <Section delay={0.5}>
                    <Heading as="h2" fontSize={20} mb={3} variant="section-title" display="inline-flex" alignItems="left">
                        3. Setting up the Discord Bot <IoLogoDiscord />
                    </Heading>
                    <ol>
                        <li>Go to the <Link href="https://discord.com/developers/applications"><u>Discord Developer page</u><ExternalLinkIcon /></Link></li>
                        <li>Click on New Application in the top right corner</li>
                        <li>Name it whatever you want (Preferrably FireStarter)</li>
                        <li>Click the copy button under application id and paste it into the config.json file in the clientID object</li>
                        <li>Click the Bot button under the Settings tab</li>
                        <li>Click the Add Bot button</li>
                        <li>Turn off the public bot option under Authorization Flow</li>
                        <li>Turn on all of the options under Privileged Gateway Intents</li>
                        <li>Click on the button that says Reset Token</li>
                        <li>Copy the token and paste it into the config.json file in the token object</li>
                        <li>Click on the OAuth2 Tab on the left side and click in URL Generator</li>
                        <li>In the scopes section, select both bot, and applications.commands</li>
                        <li>Press the copy button next to the url at the bottom of the page and paste it in a new tab</li>
                        <li>Select which server you want to add it to</li>
                        <li>Once the bot is added, right click the server icon and select the Copy ID option</li>
                        <li>Paste the copied id into the GuildID object in the config.json file</li>
                    </ol>
                </Section>
                <Section delay={0.6}>
                    <Heading as="h2" fontSize={20} mb={3} variant="section-title">
                        4. Configuring the bot
                    </Heading>
                    <Heading as="h3" fontSize={18} mb={3}>
                        - Java Pathing
                    </Heading>
                    <p>
                        If you are using openjdk, the paths should be
                    </p>
                    <p>Java 8: <i>/usr/lib64/jvm/java-1.8.0-openjdk-1.8.0/jre/bin/java</i></p>
                    <p>Java 18: <i>usr/lib64/jvm/java18-openjdk-18/bin/java</i></p>
                    <p>
                        You should paste these paths into the strings that say <i>JAVA 8 PATH HERE</i> and <i>JAVA 17 or 18 PATH HERE</i>
                    </p>
                    <Paragraph>
                        Once you have done that, you can configure your servers in the servers section of the SERVERS.json file. The ver property corresponds to the JAVA VERSION
                    </Paragraph>
                </Section>
                <Section delay={0.7}>
                    <Heading as="h2" fontSize={20} mb={3} variant="section-title">
                        5. Running the bot
                    </Heading>
                    <Paragraph>
                        First, you will need to register the commands with discord. To do so, go to the command prompt and type <i>node ./deploy-command.js</i>.
                        The output should say <i>Successfully registered application commands</i> if it has succeeded.
                    </Paragraph>
                    <Paragraph>
                        When you have configured everything to your liking, you can type <i>node ./index.js</i> to start the bot! Type <i>/help</i> in the selected discord server to get started.
                    </Paragraph>
                </Section>
                <Section delay={0.8}>
                    <Footer />
                </Section>
            </Container>
        </Layout>
    )
}
export default suse