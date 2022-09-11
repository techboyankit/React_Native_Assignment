import React from 'react';  
import { StyleSheet, View, Text, Button,DatePicker } from 'react-native';  
import styles from'./styles';  

export default class ProfileScreen extends React.Component {  
    static navigationOptions = {  
        title: 'Profile',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },   
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
    render() {   
        const { navigation } = this.props;  
        const first_name = navigation.getParam('First_Name', 'NO-User');  
        const last_name = navigation.getParam('Last_Name', 'NO-User');  
        const company_name = navigation.getParam('Company_Name', 'NO-User');  
        const occupation = navigation.getParam('Occupation', 'NO-User');  
        const DOB = navigation.getParam('Date_Of_Birth', 'NO-User');  
        const other_param = navigation.getParam('otherParam', 'some default value');  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text style={{ marginTop: 16,fontSize: 20,}}>  
                    This is Profile Screen and we receive value from Home Screen  
                </Text>  
                <Text style={styles.textStyle}>{JSON.stringify(first_name)} + " " +
                {JSON.stringify(last_name)} + " is" + 
                {JSON.stringify(DOB)} + " years old and working as a" +
                {JSON.stringify(occupation)}+" in "+
                {JSON.stringify(company_name)}+"."</Text>
                <Text style={styles.textStyle}>Other Param: {JSON.stringify(other_param)}</Text>  
                <View style={styles.buttonStyle}>  
                <Button  
                    title="Go back"  
                    onPress={() => this.props.navigation.goBack()}  
                />  
                </View>  
            </View>  
        );  
    }  
}  