import React, {useState}from 'react';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
import {TextInput,View,Image,Text,TouchableOpacity,AsyncStorage} from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function EditGroup(){
    const navigation = useNavigation();
    const route=useRoute();
    const group=route.params.group;
    const [_id,set_id] = useState(group._id);
    const [nome,setNome] = useState(group.nome);
    const [dataSorteio,setDataSorteio] = useState(group.dataSorteio);
    const [dataEvento,setDataEvento] = useState(group.dataEvento);
    const [valorMinimo,setValorMinimo] = useState(group.valorMinimo);
    const [valorMaximo,setValorMaximo] = useState(group.valorMaximo);
    console.log(group.valorMaximo);
    const [token,setToken]=useState('');

    const data={
        _id,
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
    function navigateToGroupDetail(){
        navigation.navigate('GroupDetail');
    }

    //#endregion

    async function handleEdit(){
        const response = await api.put('grupo',data,auth);
        navigateToGroupDetail();
    }



    return(
        <View style={styles.geral}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={logoImg} />
                    
                </View>
                <Text style={styles.headerText}>
                        Editar sorteio {group.nome}
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
                            minDate={new Date}
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
                            value={String(valorMinimo)}
                            onChangeText={(text)=>setValorMinimo(text)}
                        ></TextInput>
                        <TextInput
                            keyboardType='numeric'
                            style={styles.inputGroup}
                            placeholder='Valor máximo'
                            value={String(valorMaximo)}
                            onChangeText={(text)=>setValorMaximo(text)}
                        >
                        </TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleEdit}>
                        <Text style={styles.textButton}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={navigateToGroupDetail}>
                        <Text style={styles.textButton2}>Cancelar</Text>
                    </TouchableOpacity>
                    

                </View>


            </View>

        </View>
    );
}