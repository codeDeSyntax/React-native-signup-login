import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { YellowBox } from "react-native-web";
import DataBalance from "./DataBalance";
import Quickaccess from "./Quickaccess";

const Mtn = () => {
  const date = new Date();
  console.log(date);
  return (
   <>
    <View style={Mtnstyles.mainpage}>
      <View style={{ width: "100%", flexDirection: "column", paddingTop:70, backgroundColor:'#fecc12' }}>
        <View style={Mtnstyles.navbar}>
          <View style={Mtnstyles.mtnlogo}>
            <Text>Mtn</Text>
          </View>
          <View>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Yo!</Text> Josiah
            </Text>
          </View>
          <View>
            <Text>⨌⨌</Text>
          </View>
        </View>

        <View style={Mtnstyles.balances}>
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              paddingLeft: 20,
              paddingTop: 15,
            }}
          >
            Monthly usage
          </Text>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={Mtnstyles.currentBalances}>
              <View
                style={{
                  height: 35,
                  position: "absolute",
                  backgroundColor: "#fecc12",
                  top: 33,
                  right: 319,
                  width: 4,
                  borderRadius: 2,
                }}
              ></View>
              <View
                style={{
                  height: 80,
                  width: 80,
                  padding: 10,
                  borderWidth: 5,
                  borderColor: "#e9e8e8",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  
                }}
              >
                <Text style={{fontWeight:'900'}}>0%</Text>
                <Text style={{fontSize:10 ,  color:'gray'}}>Used</Text>
              </View>
              <View
                style={{
                  width: "70%",
                  alignItems:'center',
                   justifyContent:'flex-end',
                  gap: 4,
                  paddingVertical: 5,
                  
                }}
              >
                <View style={{flexDirection:'row', alignItems:'center' ,gap:3}}>
                  <View style={{ backgroundColor:'#fecc12', borderRadius:100, height:32, width:32, justifyContent:'center', alignItems:'center' }}>
                    <Text style={{fontSize:10}}>Mnt</Text>
                  </View>
                  <Text style={{ fontSize: 10 ,  color:'silver'}}>Monthly used</Text>
                </View>
                <View><Text style={{ fontSize: 25  , color:'black' , fontWeight:900 , }}>Ghc 0</Text></View>
                <View><Text style={{ fontSize: 10  , color:'silver'}}>Hello this is first</Text></View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* SHOWING OR HIDING DATA BALANCES */}

      <View style={{ width:'90%', flexDirection:'row' , justifyContent:'space-between' , paddingTop:20 }}>
        <Text style={{color:'gray', fontSize:13}}>Balances</Text>
        <Text style={{color:'gray', fontSize:13}}>view all » </Text>
      </View>
        <DataBalance/>
        <Quickaccess/>
    </View>
   
   </>
  );
};

const Mtnstyles = StyleSheet.create({
  mainpage: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#eeeeee",
    width: "100%",
    // justifyContent:'center',
    alignItems:'center'
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor:'#fecc12'
  },

  mtnlogo: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 50,
  },

  balances: {
    backgroundColor: "#eeeeee",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    paddingBottom:10
  },

  currentBalances: {
    paddingHorizontal: 8,
    flexDirection: "row",
    borderRadius: 10,
    width: "90%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fecc12",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

});

export default Mtn;
