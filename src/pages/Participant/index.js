import React, {useState,useEffect}from 'react';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TextInput,View,Image,Text,TouchableOpacity, AsyncStorage, Alert} from 'react-native';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Participant(){
    const navigation = useNavigation();
    const route=useRoute();
    const group=route.params.group;
    console.log(group);
    const participant=route.params.participant;
    const [token,setToken]=useState('');
    const [nome,setNome]=useState(participant.nome);
    const [dataNascimento,setDataNascimento]=useState(participant.dataNascimento);
    const [email,setEmail]=useState(participant.email);
//#region MENU
    function navigateToGroupDetail(){
        navigation.navigate('GroupDetail');
    }
    
//#endregion
    async function getStorage(){
        const t= await AsyncStorage.getItem('token');

        setToken(t);
        return t;
    }
    const auth = { headers: {Authorization: `Bearer ${token}`}};

    const data={
        _id:group._id,
        email
    }

    async function handleDelete(){
        const response = await api.post('grupo/participante',data,auth);
        Alert.alert(response.data.msg);
        navigateToGroupDetail();
    }

    useEffect(() => {
        getStorage();
    },[token]);


    return(
        <View style={styles.geral}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={logoImg}  />
                    <FontAwesome name={'user-circle'}size={50}color={"#fff"}style={styles.iconUser}/>
                    <Text style={styles.headerText}>
                        {nome}
                    </Text>
                </View>
                

                <View style={styles.form}>
                    <Text style={styles.property}>
                        Data de nascimento:
                    </Text>

                    <DatePicker
                        disabled
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
                    ></TextInput>
                    

                    <TouchableOpacity style={styles.button} onPress={handleDelete}>
                        <Text style={styles.textButton}>Excluir do sorteio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={navigateToGroupDetail}>
                        <Text style={styles.textButton2}>Cancelar</Text>
                    </TouchableOpacity>
                    

                </View>


            </View>

            

        </View>
    );
}