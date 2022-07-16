import { Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

const LogoBox = styled.span
`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px
padding: 10px;

&:hover img {
    transform: rotate(180deg);
}
`

const Logo = () => {
    const faviconImg = `/images/favicon${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={faviconImg} width={30} height={30} alt="logo"></Image>
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}>
                        FireStarter
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo