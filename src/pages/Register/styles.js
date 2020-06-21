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
        alignItems:'center'
    },
    iconUser:{
        marginTop:30
    },  
    headerText:{
        marginTop:35,
        fontWeight:'bold',
        fontSize:25
    },

    form:{
        marginTop:10
    },  
    input:{
        width:310,
        marginTop:15,
        backgroundColor:'#fff',
        height:40,
        fontSize:20,
        paddingLeft:10
    },
    
    groupInput:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    
    inputGroup:{
        marginTop:15,
        backgroundColor:'#fff',
        height:40,
        fontSize:20,
        paddingLeft:10,
        width:149
    },
    button:{
        marginTop:50,
        backgroundColor:'#002740',
        height:40,
    },
    textButton:{
        textAlign:'center',
        color:'#fff',
        marginTop:1,
        fontSize:25
    },
    link:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center'
    },  
    textLink:{
        marginLeft:5,
        fontSize:20
    }







});