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
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        fontSize:17,
        color:'#f0f0f0'
    },
    headerTextBold:{
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:30,
        color:'#002740',
        fontWeight:'bold'
    },
    name:{
        fontWeight:'200'
    },
    groupList:{
        marginTop:30
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
});

