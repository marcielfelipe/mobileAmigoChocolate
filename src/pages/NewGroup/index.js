import React, {Component}from 'react';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {TextInput,View,Image,Text,TouchableOpacity, _View} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function NewGroup(){
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
                    <Image source={logoImg} />
                    
                </View>
                <Text style={styles.headerText}>
                        Cadastrar novo sorteio
                    </Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome do sorteio'
                    >
                    </TextInput>
                    <View style={styles.groupInput}>
                        <DatePicker
                            style={styles.inputGroup}
                            showIcon={false}
                            mode="date"
                            placeholder="Data do sorteio"
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
                        <DatePicker
                            style={styles.inputGroup}
                            showIcon={false}
                            mode="date"
                            placeholder="Data do evento"
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
                                }
                                
                            }}
                        />

                    </View>
                    <View style={styles.groupInput}>
                        <TextInput
                            style={styles.inputGroup}
                            placeholder='Valor mínimo'
                        ></TextInput>
                        <TextInput
                            style={styles.inputGroup}
                            placeholder='Valor máximo'
                        >
                        </TextInput>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>
                            Cadastrar
                        </Text>
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