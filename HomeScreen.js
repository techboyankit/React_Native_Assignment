import React from 'react';  
import { StyleSheet, View, Button, TextInput,DatePicker} from 'react-native';
import styles from'./styles';  

export default class HomeScreen extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            first_name: '',  
            last_name: '',  
            company_name: '',  
            occupation: '',  
            DOB: '',  
        };  
    }  
    static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },    
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
    render() {  
        const { navigate } = this.props.navigation;  
        return (  
            <View style={styles.container}>    
            <TextInput
        value={this.state.first_name}  
        onChangeText={first_name => this.setState({ first_name })}  
        placeholder={'first_Name'}  
        style={styles.textInput}  
        />  
            <TextInput
        value={this.state.last_name}  
        onChangeText={last_name => this.setState({ last_name })}  
        placeholder={'Last_Name'}  
        style={styles.textInput}  
        />  
            <TextInput
        value={this.state.company_name}  
        onChangeText={company_name => this.setState({ company_name })}  
        placeholder={'Company_Name'}  
        style={styles.textInput}  
        />  
            <TextInput
        value={this.state.occupation}  
        onChangeText={occupation => this.setState({ occupation })}  
        placeholder={'occupation'}  
        style={styles.textInput}  
        />  

      <TextInput
        value={this.state.DOB}  
        onChangeText={DOB => this.setState({ DOB })}  
        placeholder={'Date_Of_Birth'}  
        style={styles.textInput}  
        >  <DatePicker
        style={styles.datePickerStyle}
        date={date}
        mode="date" 
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-1923"
        maxDate="01-01-2023"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      /></TextInput>

        <View style={styles.buttonStyle}>  
            <Button  
        title="Submit"    
        onPress={() =>  
        this.props.navigation.navigate('Profile', {  
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company_name: this.state.company_name,
            occupation: this.state.occupation,
            DOB: this.state.DOB,
            otherParam: '101',  
        })  
    }/>  
        </View>  
        </View>  
    );  
    }  
} 