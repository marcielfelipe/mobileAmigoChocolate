import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create ({
    geral:{
        backgroundColor:'#0076BF',
        flex:1,
    },
    container:{
        backgroundColor:'#0076BF',
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header:{
        alignItems: 'center'
    },
    headerText:{
        fontSize:17,
        color:'#002740',
        marginLeft:'auto'
    },
    headerTextBold:{
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:20,
        color:'#fff',
        fontWeight:'bold'
    },
    name:{
        fontWeight:'200'
    },
    groupList:{
        marginTop:10
    },
    group:{
        padding:15,
        borderRadius:5,
        backgroundColor:'#fff',
        marginBottom:10
    },
    headerGroup:{
        backgroundColor:'#f2f2f2',
        borderRadius:4,
        marginBottom:5
    },  
    headerGroupText:{
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
    menuBar:{
        height:60,
        marginTop:12,

        backgroundColor:'#002740',

    },
    iconsMenu:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:35,
        marginRight:35,
        marginTop:15
    },

    
});

