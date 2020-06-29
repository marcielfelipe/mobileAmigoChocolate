import React, {useState,useEffect}from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
import {TextInput,View,Image,Text,TouchableOpacity, _View,AsyncStorage,Alert} from 'react-native';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function AddParticipant(){
    const route=useRoute();
    const group = route.params.group;

    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [token,setToken] = useState('');

    async function getStorage(){
        const t= await AsyncStorage.getItem('token');
        setToken(t);
    }
    const auth = { headers: {Authorization: `Bearer ${token}`}};    


    function navigateToGroupDetail(){
        navigation.navigate('GroupDetail');
    }
    async function handleAdd(){
        const data={
            _id:group._id,
            email
        };
        try{
            const response = await api.put('grupo/participante', data,auth);
            Alert.alert(response.data.msg);
            navigateToGroupDetail();
        }catch{
            Alert.alert('Erro de conexão','');
        }
    }

    useEffect(() => {
        getStorage();
    },[token]);


    return(

        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg}  />
            </View>
            <Text style={styles.headerText}>
                Adicionar participante ao sorteio {group.nome}
            </Text>
            
            <View style={styles.form}>
                <TextInput
                    keyboardType='email-address'
                    style={styles.input}
                    placeholder='Email do participante'
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                >
                </TextInput>

                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.textButton}>Adicionar</Text>
                </TouchableOpacity>
            </View>


        </View>

    );
}