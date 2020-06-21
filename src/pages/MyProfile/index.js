import React, {Component}from 'react';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {TextInput,View,Image,Text,TouchableOpacity, _View} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function MyProfile(){
    const navigation = useNavigation();

    function navigateToGroups(){
        navigation.navigate('Groups');
    }
    function navigateToMyProfyle(){
        navigation.navigate('MyProfile');
    }
    function navigateToNewGroup(){
        navigation.navigate('NewGroup');
    }
    function navigateToLogin(){
        navigation.navigate('Login');
    }

    return(
        <View style={styles.geral}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={logoImg}  />
                    <FontAwesome name={'user-circle'}size={50}color={"#002740"}style={styles.iconUser}/>
                    <Text style={styles.headerText}>
                        Meu perfil
                    </Text>
                </View>
                

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome'
                        value={'Admin'}
                    >
                    </TextInput>
                    <View style={styles.groupInput}>
                        <DatePicker
                            placeholder='01/01/2020'
                            style={styles.input}
                            showIcon={false}
                            mode="date"
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate="2050-06-01"
                            confirmBtnText="Ok"
                            cancelBtnText="Cancelar"
                            onDateChange={() => {}}
                            customStyles={{
                                dateIcon:{
                                    borderColor:'#fff'
                                },
                                dateInput:{
                                    borderColor:'#fff',
                                },  
                            }}
                        />
                        

                    </View>
                    
                    <TextInput
                        style={styles.input}
                        value={'admin@email.com'}
                    ></TextInput>
                    <TextInput
                        style={styles.input}
                        value={'*******'}
                    >
                    </TextInput>
                    

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.textButton2}>Cancelar</Text>
                    </TouchableOpacity>
                    

                </View>


            </View>

            <View style={styles.menuBar}>
                <View style={styles.iconsMenu}>
                <TouchableOpacity onPress={navigateToGroups}>
                        <FontAwesome name="home" size={35} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToLogin}>
                        <FontAwesome name="sign-out" size={35} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToMyProfyle}>
                        <FontAwesome name="user-circle" size={35} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToNewGroup}>
                        <FontAwesome name="plus-circle" size={35} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}