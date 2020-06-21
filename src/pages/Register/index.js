import React, {useState}from 'react';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {TextInput,View,Image,Text,TouchableOpacity, _View} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';


export default function Register(){
    const navigation = useNavigation();

    const [nome,setNome]=useState('');
    const [dataNascimento,setDataNascimento]=useState('');
    const [email,setEmail]=useState('');
    const [senha,setSenha]=useState('');

    const data={
        nome,
        dataNascimento,
        email,
        senha,
    }
    
    async function handleRegister(){
        const response = await api.post('usuario',data);
        console.log(response.data);
        navigateToLogin();
    }


    function navigateToLogin(){
        navigation.navigate('Login');
    }

    return(
        <View style={styles.geral}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={logoImg}  />
                </View>
                <Text style={styles.headerText}>
                        Faça seu cadastro
                    </Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome'
                        value={nome}
                        onChangeText={(text)=>setNome(text)}
                    >
                    </TextInput>
                    <View style={styles.groupInput}>
                        <DatePicker
                            placeholder='Data de nascimento'
                            style={styles.input}
                            showIcon={false}
                            mode="date"
                            format="DD/MM/YYYY"
                            minDate="01-01-1910"
                            maxDate={new Date}
                            confirmBtnText="Ok"
                            cancelBtnText="Cancelar"
                            date={dataNascimento}
                            onDateChange={(date) => setDataNascimento(date)}
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
                        keyboardType='email-address'
                        style={styles.input}
                        placeholder='Email'
                        value={email}
                        onChangeText={(text)=>setEmail(text)}
                    ></TextInput>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        keyboardType='decimal-pad'
                        placeholder='Senha'
                        value={senha}
                        onChangeText={(text)=>setSenha(text)}
                    >
                    </TextInput>
                    
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.link} onPress={navigateToLogin}>
                        <FontAwesome name='sign-in'size={20} color={'#002740'}/>
                        <Text style={styles.textLink}>Tenho cadastro</Text>
                    </TouchableOpacity>
                    

                </View>
            </View>

        </View>
    );
}