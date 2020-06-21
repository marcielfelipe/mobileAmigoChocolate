import React,{useState,useEffect} from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
import {ScrollView,View, FlatList,Image,Text,TouchableOpacity,SafeAreaView,AsyncStorage} from 'react-native';
import { YellowBox } from 'react-native'


import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function GroupDetail(){
    //#region 
    YellowBox.ignoreWarnings([
        'VirtualizedLists should never be nested', // TODO: Remove when fixed
    ])

    function navigateToGroups(){
        navigation.navigate('Groups');
    }
    function navigateToEditGroup(group){
        navigation.navigate('EditGroup',{group});
    }

    //#endregion

    const navigation = useNavigation();
    const route=useRoute();
    const [token,setToken]=useState('');
    const group = route.params.group;
    const [idGroup,setIdGroup] = useState('');

    getStorage();
    async function getStorage(){
        const id=await AsyncStorage.getItem('idGroup');
        const t= await AsyncStorage.getItem('token');
        setToken(t);
        setIdGroup(id);
    }




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

                    <TouchableOpacity onPress={navigateToGroups}>
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
                                onPress={()=>{}}
                            >
                                <FontAwesome name="user" size={25} color="#002740"/>
                                <Text style={styles.oneParticipantText}>{participant.nome}</Text>
                            </TouchableOpacity>
                        )}
                    />
                        <TouchableOpacity onPress={navigateToGroups}>
                        <FontAwesome style={styles.iconAction}name="user-plus" size={30} color="#002740"/>
                    </TouchableOpacity>

                </View>   

            </ScrollView>

        </SafeAreaView>
    );
}