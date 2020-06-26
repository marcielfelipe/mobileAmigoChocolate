import React,{useState,useEffect} from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
import {ScrollView,View, FlatList,Image,Text,TouchableOpacity,SafeAreaView,AsyncStorage} from 'react-native';
import { YellowBox } from 'react-native'
import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function GroupDetail(){
    const navigation = useNavigation();
    const route=useRoute();
    const [token,setToken]=useState('');
    const group = route.params.group;
    const [idGroup,setIdGroup] = useState(route.params.id);
    const [amigo,setAmigo]=useState('');
    const [email,setEmail]=useState('');
    const [participants,setParticipants]=useState(group.participantes);



    getStorage();
    async function getStorage(){
        const t= await AsyncStorage.getItem('token');
        const e = await AsyncStorage.getItem('email');
        setToken(t);
        setEmail(e);
    }
    const auth = { headers: {Authorization: `Bearer ${token}`}};
    
     //#region 
    function navigateToGroups(){
        navigation.navigate('Groups');
    }
    function navigateToEditGroup(group){
        navigation.navigate('EditGroup',{group});
    }
    function navigateToAddParticipant(group){
        navigation.navigate('AddParticipant',{group});
    }
    function navigateToParticipant(group,participant){
        navigation.navigate('Participant',{group,participant});
    }
    function atribuirAmigo(){
        participants.map(participant=>{
            if(participant.email==email){
                setAmigo(participant.amigo);
            }
        })
    }
    
    async function handleSorteio(){
        const responseSorteio = api.get('grupo/sorteio/'+idGroup,auth);
        atribuirAmigo();
        
    }
    

    


    //#endregion

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
                    
                    <Text style={styles.property}>Status:</Text>
                    <Text style={styles.value}>{group.status}</Text>
                    <Text style={styles.value}>{amigo}</Text>

                    <TouchableOpacity onPress={()=>{handleSorteio()}}>
                        <FontAwesome style={styles.iconAction}name="random" size={30} color="#002740"/>
                    </TouchableOpacity>

                    
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