import React, {useState}from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {TextInput,View,Image,Text,TouchableOpacity, _View,AsyncStorage,Alert} from 'react-native';
import api from '../../services/api';
//import Storage from 'react-native-storage';
//mport AsyncStorage from '@react-native-community/async-storage';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Login(){
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    async function handleLogin(e){
        console.log(email);
        console.log(senha);
        const data={
            email,
            senha
        };

        try{
            console.log('teste');
            const response = await api.post('login', data);
            console.log(response.data);
            await AsyncStorage.setItem('nome',response.data.nome);
            await AsyncStorage.setItem('token',response.data.token);
            await AsyncStorage.setItem('email',response.data.email); 
            const teste= await AsyncStorage.getItem('nome');
            console.log(teste);
            navigation.navigate('Groups');
        }catch{
            Alert.alert('Erro de conexão','erro');
        }
        

        
    }

    function navigateToRegister(){
        navigation.navigate('Register');
    }
    function navigateToGroups(){
        navigation.navigate('Groups');
    }

    return(

        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg}  />
            </View>
            <Text style={styles.headerText}>
                    Faça login
                </Text>
            
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    value={senha}
                    onChangeText={(text)=> setSenha(text)}
                >
                </TextInput>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link} onPress={navigateToRegister}>
                    <FontAwesome name='arrow-left'size={20} color={'#002740'}/>
                    <Text style={styles.textLink}>Não tenho cadastro</Text>
                </TouchableOpacity>
                

            </View>


        </View>

    );
}