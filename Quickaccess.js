import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Quickaccess = () => {

    const alertMessages = [
        'Momo feature in development',
        'Feature not yet enabled',
        'Airtime feature not enabled',
        'Currently on broadband'
    ]
    const showAlert = (message) => {
        alert(message)
    }
  return (
   <View style={{backgroundColor:'white', width:'100%' , justifyContent:'center', alignItems:'center'}}>
    <View style={{flexDirection:'row' , justifyContent:'space-between', width:'90%' , paddingVertical:15}}>
        <Text style={{color:'gray'}}>Quick access</Text>
        <Text style={{color:'gray'}}>View »</Text>
    </View>
     <View style={Qaccess.accesstabs}>
      <View style={Qaccess.innerAccesstabs}>
      <View style={Qaccess.accessServices} >
            <View style={Qaccess.serviceBoxes}><Text>G</Text></View>
            <Text style={Qaccess.boxText} onPress={() => showAlert(alertMessages[0])}>Momo</Text>
          </View>
      <View style={Qaccess.accessServices}>
            <View style={Qaccess.serviceBoxes }><Text>B</Text></View>
            <Text style={Qaccess.boxText} onPress={() => showAlert(alertMessages[1])}>Broadband</Text>
          </View>
      </View>
      <View>
        <View style={Qaccess.innerAccesstabs}>
          <View style={Qaccess.accessServices}>
            <View style={Qaccess.serviceBoxes}><Text>D</Text></View>
            <Text style={Qaccess.boxText} onPress={() => showAlert(alertMessages[2])}>Data</Text>
          </View>
          <View style={Qaccess.accessServices}>
            <View style={Qaccess.serviceBoxes}><Text>A</Text></View>
            <Text style={Qaccess.boxText} onPress={() => showAlert(alertMessages[3])}>airtime</Text>
          </View>

        </View>
      </View>
    </View>
   </View>
  );
};

const Qaccess = StyleSheet.create({
    accesstabs:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    innerAccesstabs:{
        gap:10,
        width:145,
        
    },
    accessServices:{
        backgroundColor:'#323232',
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },

    serviceBoxes:{
        height:30,
        width:30,
        borderRadius:100,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    boxText:{
        color:'white'
    }
});
export default Quickaccess;
