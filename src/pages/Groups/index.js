import React,{useState,useEffect} from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList,Image,Text,TouchableOpacity,AsyncStorage,Storage} from 'react-native';
import api from '../../services/api';
;import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Groups(){
    const [groups,setGroups]=useState([]);
    const navigation = useNavigation();
    const auth = { headers: {Authorization: `Bearer ${AsyncStorage.getItem('token')}`}};
    
    function navigateToDetail(){
        navigation.navigate('GroupDetail');
    }
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
    async function loadGroups(){
        const response = await api.get('gruposusuario',auth);
        setGroups(response.data);
    }
    useEffect(()=>{
        loadGroups();
    },[]);
    
    return(
        <View style={styles.geral}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg} />    
                </View>
                <Text style={styles.title}>Bem vindo(a) <Text style={styles.name}>{AsyncStorage.getItem('nome')}</Text>!</Text>
                <Text style={styles.headerText}>
                        Total de <Text style={styles.headerTextBold}>{groups.length} grupos</Text>
                    </Text>
                <FlatList
                    style={styles.groupList}
                    data={groups}
                    keyExtractor={group=>String(group._id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:group})=>(
                        <TouchableOpacity 
                            style={styles.group}
                            onPress={navigateToDetail}
                        >
                            <View style={styles.headerGroup}>
                                <Text style={styles.headerGroupText}>{group.nome}</Text>
                            </View>
                            <Text style={styles.property}>Criado por:</Text>
                            <Text style={styles.value}>{group.criadoPor}</Text>
                            <Text style={styles.property}>Data do sorteio:</Text>
                            <Text style={styles.value}>{group.dataSorteio}</Text>
                        </TouchableOpacity>
                    )}
                />

            </View>
            <View style={styles.menuBar}>
                <View style={styles.iconsMenu}>
                <TouchableOpacity onPress={navigateToGroups}>
                        <FontAwesome name="home" size={35} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToLogin}>
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