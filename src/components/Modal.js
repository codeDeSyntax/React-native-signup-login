import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";


const Mod = ({showModal , setShowModal}) => {
    const [modalVisible, setModalVisible] = useState(false);
  
    return (
      <View style={styles.container}>
       
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello, I am a Modal!</Text>
              <Button
                title="Close Modal"
                onPress={() => setShowModal(!showModal)}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
  
  export default Mod;
  