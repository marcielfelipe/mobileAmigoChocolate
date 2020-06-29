import React,{useState,useEffect} from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
import {ScrollView,View, FlatList,Image,Text,TouchableOpacity,SafeAreaView,AsyncStorage, Alert} from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function GroupDetail(){
    const navigation = useNavigation();
    const route=useRoute();
    const [token,setToken]=useState('');
    const [idGroup,setIdGroup] = useState(route.params.id);
    const [amigo,setAmigo]=useState('');
    const [email,setEmail]=useState('');
    const [group,setGroup]=useState([]);
    const [participants,setParticipants]=useState([]);
    const [mostrarAmigo,setMostrarAmigo]=useState(false);

    async function getStorage(){
        const t= await AsyncStorage.getItem('token');
        const e = await AsyncStorage.getItem('email');
        setToken(t);
        setEmail(e);
    }
    const auth = { headers: {Authorization: `Bearer ${token}`}};

    async function loadGroup(){
        const response = await api.get('grupo/'+idGroup,auth);
        setGroup(response.data);
        setParticipants(group.participantes);
    }
    //#region ROTAS
    function navigateToGroups(){
        navigation.navigate('Groups');
    }
    function navigateToEditGroup(group){
        navigation.navigate('EditGroup',{group});
    }
    function navigateToAddParticipant(group){
        if(group.status=='Em Aberto'){
            navigation.navigate('AddParticipant',{group});
        }
        else{
            Alert.alert('Ops :(','O sorteio já foi realizado. Cancele o sorteio para adicionar mais participantes.')
        }
        
    }
    function navigateToParticipant(group,participant){
        navigation.navigate('Participant',{group,participant});
    }
    //#endregion
    function atribuirAmigo(){
        setMostrarAmigo(!mostrarAmigo);
        for (let index = 0; index < participants.length; index++) {
            const element = participants[index];
            if(element.email==email){
                setAmigo(element.amigo);
            }
        }
        console.log(amigo);
        
    }
   
    async function handleSorteio(){
        const responseSorteio = await api.get('grupo/sorteio/'+idGroup,auth);
        Alert.alert(responseSorteio.data.msg);
    }

    async function handleDeleteSorteio(){
        const data={
            _id:idGroup
        }
        const res = await api.put('grupo/sorteio',data,auth);
        Alert.alert(res.data.msg);
    }

    useEffect(() => {
        loadGroup();
        getStorage();
    },[token,group]);

    return(
        <SafeAreaView style={styles.container}> 

            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={navigateToGroups}>
                    <FontAwesome name="arrow-left" size={28} color="#fff"/>
                </TouchableOpacity>
                <Image source={logoImg}/>
            </View>

            <ScrollView 
                vertical
                style={styles.scrollContainer} 
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
            >
                <View style={styles.firstCard}>

                    <View style={styles.headerCard}>
                        <Text style={styles.headerCardText}>Sorteio</Text>
                    </View>
                    {
                        group.status=='Em Aberto' && 
                            <View>
                                <Text style={styles.property}>Status:</Text>
                                <Text style={styles.value}>{group.status}</Text>
                            </View>
                    }{
                        group.status=='Sorteado' && 
                            <View>
                                <Text style={styles.property}>Status:</Text>
                                <Text style={styles.value}>{group.status}</Text>
                                <Text style={styles.property}>Amigo:</Text>
                                {
                                    mostrarAmigo &&<Text>{amigo}</Text>
                                }{
                                    !mostrarAmigo && <Text></Text>
                                }
                                {
                                    !mostrarAmigo &&  
                                    <TouchableOpacity onPress={()=>atribuirAmigo()}>
                                        <FontAwesome style={styles.iconAction}name="eye" size={30} color="#002740"/>
                                    </TouchableOpacity>
                                }{
                                    mostrarAmigo &&  
                                    <TouchableOpacity onPress={()=>setMostrarAmigo(!mostrarAmigo)}>
                                        <FontAwesome style={styles.iconAction}name="eye-slash" size={30} color="#002740"/>
                                    </TouchableOpacity>
                                }
                                
                               
                            </View>
                    }
                    
                    {
                        group.status=='Em Aberto' && 
                            <TouchableOpacity onPress={()=>{handleSorteio()}}>
                                <FontAwesome style={styles.iconAction}name="random" size={30} color="#002740"/>
                            </TouchableOpacity>
                    }{
                        group.status=='Sorteado' && 
                            <TouchableOpacity onPress={()=>{handleDeleteSorteio()}}>
                                <FontAwesome style={styles.iconAction}name="undo" size={30} color="#002740"/>
                            </TouchableOpacity>
                    }
                   
                    
                </View>

                <View style={styles.card}>
                    <View style={styles.headerCard}>
                        <Text style={styles.headerCardText}>{group.nome}</Text>
                    </View>

                    <Text style={styles.property}>Criado por:</Text>
                    <Text style={styles.value}>{group.criadoPor}</Text>
                    <Text style={styles.property}>Data do sorteio:</Text>
                    <Text style={styles.value}>{group.dataSorteio}</Text>
                    <Text style={styles.property}>Data do evento:</Text>
                    <Text style={styles.value}>{group.dataEvento}</Text>
                    <Text style={styles.property}>Faixa de preço:</Text>
                    <Text style={styles.value}>{group.valorMinimo} --{group.valorMaximo}</Text>

                    <TouchableOpacity onPress={()=>navigateToEditGroup(group)}>
                        <FontAwesome style={styles.iconAction}name="edit" size={30} color="#002740"/>
                    </TouchableOpacity>

                </View>

                <View style={styles.card}>

                    <View style={styles.headerCard}>
                        <Text style={styles.headerCardText}>Participantes</Text>
                    </View>

                    <FlatList
                        style={styles.participantList}
                        data={group.participantes}
                        keyExtractor={participant=>String(participant._id)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item:participant})=>(
                            <TouchableOpacity 
                                style={styles.oneParticipant}
                                onPress={()=>{navigateToParticipant(group,participant)}}
                            >
                                <FontAwesome name="user" size={25} color="#002740"/>
                                <Text style={styles.oneParticipantText}>{participant.nome}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity onPress={()=>navigateToAddParticipant(group)}>
                        <FontAwesome style={styles.iconAction}name="user-plus" size={30} color="#002740"/>
                    </TouchableOpacity>

                </View>   

            </ScrollView>

        </SafeAreaView>
    );
}