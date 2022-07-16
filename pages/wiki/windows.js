import { Container, Heading, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { IoLogoNodejs, IoLogoDiscord } from "react-icons/io5"
import Footer from "../../components/footer"
import Layout from "../../components/layouts/article"
import Paragraph from "../../components/paragraph"
import Section from "../../components/section"
import { SiWindows } from "react-icons/si"
const windows = () => {
    return (
        <Layout title="Windows Install">
            <Container>
                <Section delay={0.1}>
                    <Heading as="h3" fontSize={28} mb={4} display="inline-flex" alignItems="left" >
                        <SiWindows />&nbsp;Windows Installation
                    </Heading>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h2" fontSize={20} mb={4} variant="section-title" display="inline-flex" alignItems="left">
                        1. Installing Node.js<IoLogoNodejs />
                    </Heading>
                    <Paragraph>
                        In order to run Firestarter, you first need to install the current version of&nbsp;
                        <Link href="https://www.nodejs.org/" target="_blank">NodeJS<ExternalLinkIcon /></Link>. Download and run the msi file to install it.
                    </Paragraph>
                    <p />
                </Section>
                <Section delay={0.3}>
                    <Heading as="h2" fontSize={20} mb={3} variant="section-title">
                        2. Installing Java Runtimes
                    </Heading>
                    <Paragraph>
                        Personally, I recommend installing the Adoptium releases of java, as that is what I have used.
                        You need to install both Java 8 and Java 18 for Firestarter to launch all versions of minecraft.
                    </Paragraph>
                    <p />
                    <Link href="https://adoptium.net/temurin/releases/?version=8" target="_blank">Install Java 8 from here<ExternalLinkIcon /></Link>
                    <p />
                    <Link href="https://adoptium.net/temurin/releases/?version=18" target="_blank">Install Java 18 from here<ExternalLinkIcon /></Link>
                    <p />
                </Section>
                <Section delay={0.4}>
                    <Heading as="h2" fontSize={20} mb={3} variant="section-title">
                        3. Downloading the code
                    </Heading>
                    <Paragraph>
                        Download the zip file from the github page or from&nbsp;
                        <Link href="https://github.com/CherryYeti/FireStarter/archive/refs/heads/master.zip">here<ExternalLinkIcon /></Link>
                        &nbsp;
                        and extract it anywhere you like. This will not be the directory that your servers are stored in, so you do not have to worry about running out of storage.
                    </Paragraph>
                    <Paragraph>
                        Once you have downloaded the code, you are going to need to install some of FireStarter's dependencies, to do so,
                    </Paragraph>
                    <p />
                    <ol>
                        <li>Open the Command Prompt</li>
                        <li>Open the folder that you extracted in the command prompt</li>
                        <li>Type <i>npm i</i> into the command prompt to install the dependencies</li>
                    </ol>
                </Section>
                <Section delay={0.5}>
                    <Heading as="h2" fontSize={20} mb={3} variant="section-title" display="inline-flex" alignItems="left">
                        3. Setting up the Discord Bot <IoLogoDiscord />
                    </Heading>
                    <ol>
                        <li>Go to the <Link href="https://discord.com/developers/applications">Discord Developer page<ExternalLinkIcon /></Link></li>
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
                    <Paragraph>
                        Since certain version of minecraft use different versions of java, we need to tell FireStarter where those java versions are.
                        To do this we need to edit the contents of the SERVERS.json file that we downloaded as part of the code.
                    </Paragraph>
                    <Paragraph>
                        The Java versions will be located in a folder called Eclipse Adoptium in your Program Files folder. There should be two folders, corresponding to jdk 8 and jdk 18.
                    </Paragraph>
                    <Paragraph>
                        Enter the Java 8 folder and open the folder labeled bin. Right click on the java file and click <i>Copy as path</i>.
                        Now paste the path that you copied into the SERVERS.json file into the JAVA 8 PATH HERE section.
                    </Paragraph>
                    <Paragraph>
                        Enter the Java 18 folder and open the folder labeled bin. Right click on the java file and click <i>Copy as path</i>.
                        Now paste the path that you copied into the SERVERS.json file into the JAVA 17 or 18 PATH HERE section.
                    </Paragraph>
                    <Paragraph>
                        Unfortunately, Windows is extremely annoying with the way that they do paths, so you will have to do some modifying.
                    </Paragraph>
                    <p>Change you need to make</p>
                    <p>Every directory that has a space in it, you need to surround with \"</p>
                    <p>EX. <i>C:/Test/Space Folder/</i> turns into <i>C:/Test/\"Space Folder\"/</i></p>
                    <Paragraph>
                        Once you have done that, you can configure your servers in the servers section of the SERVERS.json file. The <i>ver</i> property corresponds to the JAVA VERSION
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
export default windows