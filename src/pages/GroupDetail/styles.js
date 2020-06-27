import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        backgroundColor:'#0076BF',
        flex:1,
        paddingHorizontal:15,
        paddingTop: Constants.statusBarHeight + 20
    },

    headerContainer:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    scrollContainer:{
        marginTop:40
    },
    firstCard:{
        padding:15,
        borderRadius:5,
        backgroundColor:'#fff',
        marginBottom:10
    },
    card:{
        marginTop: 10,
        padding:15,
        borderRadius:5,
        backgroundColor:'#fff',
        marginBottom:10
    }, 
    headerCard:{
        backgroundColor:'#f2f2f2',
        borderRadius:4,
        marginBottom:5
    }, 
    headerCardText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#0076BF',
        textAlign:'center'
    },
    property:{
        fontSize:14,
        color:'#002740',
        fontWeight:'bold'
    },
    value:{
        marginTop:3,
        fontSize:15,
        marginBottom:12,
        color:'#737380'
    },
    
    iconAction:{
        marginLeft: 'auto'
    },

    oneParticipant:{
        flexDirection:'row',
        alignItems:'center'
    },
    oneParticipantText:{
        marginLeft:8,
    },

    
});