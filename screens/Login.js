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
    Colors
} from '../components/styles'
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from 'react-native';
//formik
import { Formik } from 'formik'
//icons
import { Ionicons, Octicons, Fontisto } from '@expo/vector-icons';

const { brand, primary, secondary } = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(false)
    const [] = useState(false)



    const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {

        return (
            <View>
                <LeftIcon>
                    <Octicons name={icon} size={30} color={brand} />
                </LeftIcon>
                <StyledInputLabel>{label}</StyledInputLabel>
                <StyledTextInput {...props} />
                {isPassword && (
                    <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                        <Ionicons
                            size={30}
                            color={brand}
                            name={hidePassword ? "eye-off" : "eye"}
                        />
                    </RightIcon>
                )}
            </View>
        )
    };

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/images/trecLogo.png')} />
                <PageTitle>Trec</PageTitle>
                <SubTitle>Welcome, to get started sign in</SubTitle>
                <View style={{
                    marginBottom: 20,
                }}>
                    <Text>Welcome to the online licensing service. If you are a new user, please register using the "sign-up" link. This online service can be used to apply for, renew, or manage TREC and TALCB issued licenses.</Text>
                </View>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values)
                        if (email && password) {
                            //redirect to dashboard screen
                            navigation.navigate('Dashboard')
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Email"
                                icon="mail"
                                placeholder="Enter Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="Enter Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                                isPassword={true}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Login</ButtonText>
                            </StyledButton>
                            <Line />
                            <StyledButton google={true} onPress={handleSubmit}>
                                <Fontisto name="google" size={25} color={primary} />
                                <ButtonText google={true}>Sign in with Google</ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Don't have an account?</ExtraText>
                                <TextLink onPress={handleSubmit}>
                                    <TextLinkContent>Sign Up</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
                <View
                    style={{
                        marginBottom: 10,
                    }}>
                    <Text>Use of this system constitutes consent to monitoring, interception, recording, reading, copying or capturing by authorized personnel of all activities. There is no right to privacy in this system. Unauthorized use of this system is prohibited and subject to criminal and civil penalties.</Text>
                </View>
            </InnerContainer>
        </StyledContainer>
    )
};



export default Login
