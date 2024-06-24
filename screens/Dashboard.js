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
} from '../components/styles'
import { StatusBar } from "expo-status-bar";
import { View, Text } from 'react-native';
//formik
import { Formik } from 'formik'
//icons
import { Ionicons, Octicons, Fontisto } from '@expo/vector-icons';


const { brand, primary, secondary } = Colors;


const Dashboard = () => {


    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <UserDisplayContainer>

            </UserDisplayContainer>
        </StyledContainer>
    )
};



export default Dashboard
