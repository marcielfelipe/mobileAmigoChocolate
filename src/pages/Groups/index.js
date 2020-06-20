import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList,Image,Text,TouchableOpacity} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Groups(){
    const navigation = useNavigation();
    
    function navigateToDetail(){
        navigation.navigate('GroupDetail');
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 grupos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem vindo(a) <Text style={styles.name}>User</Text>!</Text>

        <FlatList
            style={styles.groupList}
            data={[1,2,3,4,5]}
            keyExtractor={group=>String(group)}
            showsVerticalScrollIndicator={false}
            renderItem={()=>(
                <TouchableOpacity 
                    style={styles.group}
                    onPress={navigateToDetail}
                >
                    <View style={styles.headerGroup}>
                        <Text style={styles.headerGroupText}>Nome do Grupo</Text>
                    </View>
                    <Text style={styles.property}>Criado por:</Text>
                    <Text style={styles.value}>Admin</Text>
                    <Text style={styles.property}>Data do sorteio:</Text>
                    <Text style={styles.value}>31/12/2020</Text>
                </TouchableOpacity>
            )}
        />
        </View>
    );
}