import Styled from 'styled-components/native';
import styled from 'styled-components/native';
import { View, Text, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: "#f5f5f5",
    secondary: "#7f1d1d",
    tertiary: "#222",
    brand: "#0c4a6e",
    darkLight: "#575757",
    green: "#0e7490",
    red: "#7f1d1d"
};

const { primary, secondary, tertiary, brand, darkLight, green, red } = Colors

export const StyledContainer = Styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${Constants.statusBarHeight + 10}px;
    background-color: ${primary};
    `

export const InnerContainer = Styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`
export const UserDisplayContainer = styled(InnerContainer)`
    border-radius: 5px;
    background-color: ${brand};
    justify-content: center;
    padding-vertical: 1.5rem;
    color: ${primary};
`

export const UserAvatar = Styled.Image`
    position: relative;
    top: -5rem;
    margin: auto;
    border-radius: 250px;
    width: 100px;
    height: 100px;

`

export const UserName = Styled.Text`
    font-size: 1.5rem;
    font-weight: bold;
    `

export const PageLogo = Styled.Image`
    width: 250px;
    height: 250px;
    `

export const PageTitle = Styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding-top: 10px; 

    ${(props) => props.dashboard && `
    color: ${primary};
    `}
    `

export const SubTitle = Styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
    ${(props) => props.dashboard && `
    color: ${primary};
    `}
`
export const InfoText = Styled.Text`
    color: ${primary};
    padding-horizontal: 20px;
`
export const StyledFormArea = Styled.View`
    width: 90%;
`

export const StyledTextInput = Styled.TextInput`
    background-color: ${primary};
    padding: 15px;
    padding-left: 55px;   
    padding-right: 55px;
    border-radius: 5px; 
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
    `


export const StyledInputLabel = Styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
    `

export const LeftIcon = Styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`

export const RightIcon = Styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`

export const StyledButton = Styled.TouchableOpacity`
    background-color: ${brand};
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    height: 60px;

${(props) => props.google && `
    background-color: ${green};
    flex-direction: row;
    justify-content: center;
`}

${(props) => props.green && `
    background-color: ${green};
    justify-content: center;
`}
${(props) => props.red && `
    background-color: ${red};
    justify-content: center;
`}
`

export const ButtonText = Styled.Text`
    color: ${primary};
    font-size: 16px;
    text-align: center;
    
    ${(props) => props.google && `
    padding-left: 25px;
`}
`

export const MsgBox = Styled.Text`
    text-align: center;
    font-size: 13px;
`

export const Line = Styled.View`
    height: 1px;
    width: 100%;
    background-color: ${tertiary};
    margin-vertical: 10px;
`

export const StyledError = Styled.Text`
    color: ${red};
    font-size: 13px;
    text-align: left;
`
export const ExtraView = Styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`

export const ExtraText = Styled.Text`
    color: ${tertiary};
    justify-content: center;
    align-items: center;
    font-size: 15px;
`

export const TextLink = Styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const TextLinkContent = Styled.Text`
    color: ${brand};
    font-size: 15px;
    margin-horizontal: 5px;
`

