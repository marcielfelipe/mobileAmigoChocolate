import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create ({

    container:{
        backgroundColor:'#0076BF',
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header:{
        marginTop:50,
        alignItems:'center'
    }, 
    headerText:{
        marginTop:50,
        fontWeight:'bold',
        fontSize:25
    },
    form:{
        marginTop:20
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