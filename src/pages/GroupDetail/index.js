import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {ScrollView,View, FlatList,Image,Text,TouchableOpacity,SafeAreaView} from 'react-native';
import { YellowBox } from 'react-native'

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function GroupDetail(){
    YellowBox.ignoreWarnings([
        'VirtualizedLists should never be nested', // TODO: Remove when fixed
    ])
    const navigation = useNavigation();

    function navigateToGroups(){
        navigation.navigate('Groups');
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
                    <Text style={styles.value}>Em aberto</Text>

                    <TouchableOpacity onPress={navigateToGroups}>
                        <FontAwesome style={styles.iconAction}name="random" size={30} color="#002740"/>
                    </TouchableOpacity>

                    
                </View>

                <View style={styles.card}>
                    <View style={styles.headerCard}>
                        <Text style={styles.headerCardText}>Nome do Grupo</Text>
                    </View>

                    <Text style={styles.property}>Criado por:</Text>
                    <Text style={styles.value}>Admin</Text>
                    <Text style={styles.property}>Data do sorteio:</Text>
                    <Text style={styles.value}>31/12/2020</Text>
                    <Text style={styles.property}>Data do evento:</Text>
                    <Text style={styles.value}>31/12/2020</Text>
                    <Text style={styles.property}>Faixa de preço:</Text>
                    <Text style={styles.value}>R$10,00 --R$20,00</Text>
                    <Text style={styles.property}>Status:</Text>
                    <Text style={styles.value}>Em aberto</Text> 

                    <TouchableOpacity onPress={navigateToGroups}>
                        <FontAwesome style={styles.iconAction}name="edit" size={30} color="#002740"/>
                    </TouchableOpacity>

                </View>

                <View style={styles.card}>

                    <View style={styles.headerCard}>
                        <Text style={styles.headerCardText}>Participantes</Text>
                    </View>

                    <FlatList
                        style={styles.participantList}
                        data={[1,2,3,4,5]}
                        keyExtractor={participant=>String(participant)}
                        showsVerticalScrollIndicator={false}
                        renderItem={()=>(
                            <TouchableOpacity 
                                style={styles.oneParticipant}
                                onPress={()=>{}}
                            >
                                <FontAwesome name="user" size={25} color="#002740"/>
                                <Text style={styles.oneParticipantText}>Nome do Participante</Text>
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