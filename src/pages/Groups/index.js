import React,{useState,useEffect} from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList,Image,Text,TouchableOpacity,AsyncStorage,Alert} from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Groups(){
    const [groups,setGroups]=useState([]);
    const [token,setToken]=useState('');
    const [nome,setNome]=useState('');
    const [apagar,setApagar] = useState(false)

    const navigation = useNavigation();
    async function getStorage(){
        const t= await AsyncStorage.getItem('token');
        const n= await AsyncStorage.getItem('nome');
        setNome(n);
        setToken(t);
    }
    const auth = { headers: {Authorization: `Bearer ${token}`}};
    function navigateToGroups(){
        navigation.navigate('Groups');
    }
    function navigateToMyProfyle(){
        navigation.navigate('MyProfile');
    }
    function navigateToNewGroup(){
        navigation.navigate('NewGroup');
    }
    
    async function handleLogout(){
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('nome');
        await AsyncStorage.removeItem('email');
        navigation.navigate('Login');
    }

    async function loadGroups(){
        const response = await api.get('gruposusuario',auth);
        setGroups(response.data);
    }
    async function handleDeleteGroup(group){
        
        Alert.alert(
            `Apagar o Grupo ${group.nome}`,
            [
              {
                text: 'Sim',
                onPress: () => setApagar(true)
              },
              {
                text: 'Não',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              }
            ],
            { cancelable: false }
          );

        if(apagar){
            setApagar(false);
            const response = await api.delete('grupo/'+group._id,auth);
        }
         
    }
    async function handleGroupDetail(group){
        const id = group._id;
        const participants = group.participantes;
        navigation.navigate('GroupDetail',{group,id,participants});
    }


    useEffect(() => {
        loadGroups();
        getStorage();
    },[token,groups]);
   
    
    return(
        <View style={styles.geral}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg} />    
                </View>
                <Text style={styles.title}>Bem vindo(a) <Text style={styles.name}>{nome}</Text>!</Text>
                <Text style={styles.headerText}>
                        Total de <Text style={styles.headerTextBold}>{groups.length} sorteio(s)</Text>
                    </Text>
                <FlatList
                    style={styles.groupList}
                    data={groups}
                    keyExtractor={group=>String(group._id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:group})=>(
                        <View style={styles.group}>
                            <View style={styles.headerGroup}>
                                <Text style={styles.headerGroupText}>{group.nome}</Text>
                                <TouchableOpacity onPress={()=>{handleDeleteGroup(group)}}>
                                    <FontAwesome style={styles.deleteIcon}name="trash" size={20} color="#D62525"/>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity 
                                style={styles.groupBody}
                                onPress={()=>{handleGroupDetail(group)}}
                            >
                                <Text style={styles.property}>Criado por:</Text>
                                <Text style={styles.value}>{group.criadoPor}</Text>
                                <Text style={styles.property}>Data do sorteio:</Text>
                                <Text style={styles.value}>{group.dataSorteio}</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                />

            </View>
            <View style={styles.menuBar}>
                <View style={styles.iconsMenu}>
                <TouchableOpacity onPress={navigateToGroups}>
                        <FontAwesome name="home" size={35} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogout}>
                        <FontAwesome name="sign-out" size={35} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToMyProfyle}>
                        <FontAwesome name="user-circle" size={35} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToNewGroup}>
                        <FontAwesome name="plus-circle" size={35} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>

    );
}