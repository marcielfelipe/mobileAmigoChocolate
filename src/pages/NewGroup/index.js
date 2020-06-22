import React, {useState,useEffect}from 'react';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {TextInput,View,Image,Text,TouchableOpacity,AsyncStorage, Alert} from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function NewGroup(){
    const navigation = useNavigation();

    const [nome,setNome] = useState('');
    const [dataSorteio,setDataSorteio] = useState('');
    const [dataEvento,setDataEvento] = useState('');
    const [valorMinimo,setValorMinimo] = useState('');
    const [valorMaximo,setValorMaximo] = useState('');

    const [token,setToken]=useState('');

    const data={
        nome,
        dataSorteio,
        dataEvento,
        valorMinimo,
        valorMaximo
    }
    getStorage();
    async function getStorage(){
        const t= await AsyncStorage.getItem('token');
        setToken(t);
    }
    const auth = { headers: {Authorization: `Bearer ${token}`}};

    //#region  menu
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

    
    async function create(){
        try{
            const response = await api.post('grupo',data,auth);
            Alert.alert(response.data.msg);
        }catch{
            Alert.alert('erro','');
        }
        navigation.navigate('Groups');
        
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
                        value={nome}
                        onChangeText={(text)=>setNome(text)}
                    >
                    </TextInput>
                    <View style={styles.groupInput}>
                        <DatePicker
                            style={styles.inputGroup}
                            showIcon={false}
                            mode="date"
                            placeholder="Data do sorteio"
                            format="YYYY-MM-DD"
                            minDate={new Date}
                            maxDate="2050-06-01"
                            confirmBtnText="Ok"
                            cancelBtnText="Cancelar"
                            date={dataSorteio}
                            onDateChange={(date) => {setDataSorteio(date)}}
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
                            minDate={dataSorteio}
                            maxDate="2050-06-01"
                            confirmBtnText="Ok"
                            cancelBtnText="Cancelar"
                            date={dataEvento}
                            onDateChange={(date) => {setDataEvento(date)}}
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
                            keyboardType='numeric'
                            style={styles.inputGroup}
                            placeholder='Valor mínimo'
                            value={valorMinimo}
                            onChangeText={(text)=>setValorMinimo(text)}
                        ></TextInput>
                        <TextInput
                            keyboardType='numeric'
                            style={styles.inputGroup}
                            placeholder='Valor máximo'
                            value={valorMaximo}
                            onChangeText={(text)=>setValorMaximo(text)}
                        >
                        </TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={create}>
                        <Text style={styles.textButton}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={navigateToGroups}>
                        <Text style={styles.textButton2}>Cancelar</Text>
                    </TouchableOpacity>

                </View>


            </View>


        </View>
    );
}