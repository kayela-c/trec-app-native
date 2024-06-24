import React, { useState } from 'react'
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    Colors,
    UserDisplayContainer,
    InfoText
} from '../components/styles'
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
//formik
import { Formik } from 'formik'
//icons
import { Ionicons, Octicons, Fontisto } from '@expo/vector-icons';

const { brand, primary, secondary } = Colors;


const license = '123456';
const licenseType = 'Sales Agent';
const displayName = 'Luna Lovegood';
const status = 'Current';
const expiry = '01-/01/25';
const address = '1324 Main';
const link = 'https://www.google.com';
const linkName = 'Link';

const Login = () => {

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <UserDisplayContainer>
                <PageTitle dashboard={true}>Welcome</PageTitle>
                <SubTitle dashboard={true}>{displayName}</SubTitle>
                <View style={{
                    marginBottom: 20,
                }}>
                    <InfoText>
                        {license}
                    </InfoText>
                    <InfoText>
                        {licenseType}
                    </InfoText>
                    <InfoText>
                        {status}
                    </InfoText>
                    <InfoText>
                        {expiry}
                    </InfoText>
                    <InfoText>
                        {address}
                    </InfoText>
                </View>

            </UserDisplayContainer>
            <StyledButton red={true}>
                <ButtonText>Renew License</ButtonText>
            </StyledButton>
            <StyledButton green={true}>
                <ButtonText>Check App Status</ButtonText>
            </StyledButton>
            <Collapsible title={linkName}>
                <Text>{link}</Text>
            </Collapsible>
        </StyledContainer>
    )
};



export default Login
