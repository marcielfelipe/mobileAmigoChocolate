import React, {useState,useEffect}from 'react';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {TextInput,View,Image,Text,TouchableOpacity, AsyncStorage} from 'react-native';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function MyProfile(){
    const navigation = useNavigation();
    const [nome,setNome]=useState('');
    const [dataNascimento,setDataNascimento]=useState('');
    const [email,setEmail]=useState('');
    const [senha,setSenha]=useState('');
    const [novaSenha,setNovaSenha]=useState('');

    const [token,setToken]=useState('');
//#region MENU
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
//#endregion
    async function getStorage(){
        const t= await AsyncStorage.getItem('token');
        const n= await AsyncStorage.getItem('nome');
        setNome(n);
        setToken(t);
        return t;
    }
    const auth = { headers: {Authorization: `Bearer ${token}`}};

    async function loadUser(){
        const response = await api.get ('meuperfil',auth);
        setNome(response.data.nome);
        setDataNascimento(response.data.dataNascimento);
        setEmail(response.data.email);
        
    }
    async function handleLogout(){
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('nome');
        await AsyncStorage.removeItem('email');
        navigation.navigate('Login');
    }
    
    async function handleEdit(){
        const data={
            nome,
            email,
            dataNascimento
        }
        const alterPass={
            senhaAntiga:senha,
            novaSenha
        }
 
        const response = await api.put('usuario',data,auth);
        const pass = await api.put('editsenha',alterPass,auth);
        handleLogout();


        
    }

    useEffect(() => {
        loadUser();
        getStorage();
    },[token]);


    return(
        <View style={styles.geral}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={logoImg}  />
                    <FontAwesome name={'user-circle'}size={50}color={"#fff"}style={styles.iconUser}/>
                    <Text style={styles.headerText}>
                        Meu perfil
                    </Text>
                </View>
                

                <View style={styles.form}>
                    <Text style={styles.property}>
                        Nome:
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={(text)=>setNome(text)}
                    >
                    </TextInput>

                    <Text style={styles.property}>
                        Data de nascimento:
                    </Text>

                    <DatePicker
                        date={dataNascimento}
                        style={styles.input}
                        showIcon={false}
                        mode="date"
                        format="YYYY-MM-DD"
                        minDate="1900-01-01"
                        maxDate="2050-06-01"
                        confirmBtnText="Ok"
                        cancelBtnText="Cancelar"
                        onDateChange={(date) => {setDataNascimento(date)}}
                        customStyles={{
                            dateIcon:{
                                borderColor:'#fff'
                            },
                            dateInput:{
                                borderColor:'#fff',
                            },  
                        }}
                    />

                    
                    <Text style={styles.property}>
                        Email:
                    </Text>
                    <TextInput
                        disabled
                        style={styles.input}
                        value={email}
                        onChangeText={(text)=>setEmail(text)}
                    ></TextInput>
                    <Text style={styles.property}>
                        Senha atual:
                    </Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        keyboardType='decimal-pad'
                        value={senha}
                        onChangeText={(text)=>setSenha(text)}
                    >
                    </TextInput>
                    <Text style={styles.property}>
                        Nova senha:
                    </Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        keyboardType='decimal-pad'
                        value={novaSenha}
                        onChangeText={(text)=>setNovaSenha(text)}
                    >
                    </TextInput>
                    

                    <TouchableOpacity style={styles.button} onPress={handleEdit}>
                        <Text style={styles.textButton}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={navigateToGroups}>
                        <Text style={styles.textButton2}>Cancelar</Text>
                    </TouchableOpacity>
                    

                </View>


            </View>

            

        </View>
    );
}