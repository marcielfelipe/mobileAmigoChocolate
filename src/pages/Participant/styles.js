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
        marginTop:30,
    },  
    headerText:{
        color:'#002740',
        marginTop:5,
        fontWeight:'bold',
        fontSize:25
    },

    form:{
        marginTop:20
    },  
    input:{
        width:310,
        marginTop:5,
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
    button2:{
        marginTop:10,
        borderWidth:1,
        borderColor:'#002740'
    },  
    textButton2:{
        textAlign:'center',
        color:'#002740',
        fontSize:25,
        marginBottom:3
    },  
    property:{
        color:'#002740',
        marginTop:10,
        fontSize:15
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