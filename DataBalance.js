import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";


const DataBalance = () => {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    
    
    const formattedDateTime = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    
    console.log(formattedDateTime);
    

  return (
   <>
    <View style={dtbalance.databalanceBox}>
      <View style={dtbalance.balanceBox}>
        <Text style={{padding:5}}>Broadcast</Text>
        <View style={dtbalance.insideBalanceBox}>
          <Text style={{fontWeight:800}}>245 .12 GB</Text>
          <Text style={{color:'silver', fontSize:10}}>Bonus: 20GB</Text>
        </View>
      </View>

      <View style={dtbalance.balanceBox}>
        <Text style={{padding:5}}>Data</Text>
        <View style={dtbalance.insideBalanceBox}>
          <Text style={{fontWeight:800}}>245 GB</Text>
          <Text style={{color:'silver', fontSize:10}}>Bonus: 20GB</Text>
        </View>
      </View>
    </View>
   
   <Text style={{marginTop:30, paddingBottom:15 , color:'gray', fontSize:10} }>showing current Balances at {formattedDateTime}</Text>
   </>
  );
};

const dtbalance = StyleSheet.create({
  databalanceBox: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop:10,
    paddingBottom:10
  },

  balanceBox: {
    
    backgroundColor: "#fecc12",
    borderRadius: 8,
    width: "45%",
    borderWidth: 2,
    borderColor: "#fecc12",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  insideBalanceBox: {
    borderTopRightRadius: 13,
    backgroundColor: "white",
    padding:10,
    borderBottomRightRadius:8,
    borderBottomLeftRadius:8,
    gap:3
  },
});

export default DataBalance;
