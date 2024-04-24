import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const GoalAdder = () => {
    const [valueEntered, setValueEntered] = useState("");
    const [goalsList, setGoalsList] = useState([]);
    const [deletedGoals, setDeletedGoals] = useState([]);
    const [displayUndo, setDisplayUndo] = useState(false);
    const [showCancel, setShowCancel] = useState([]);


    const handleAddGoal = () => {
        if (valueEntered.trim() !== "") {
          const newGoal = {
            goal: valueEntered,
            id: goalsList.length + 1,
          };
          setGoalsList(prevList => [...prevList, newGoal]);
          setValueEntered(""); // Clear input field
          setShowCancel(prevState => [...prevState, false]); // Initialize cancel button visibility for new goal
        }
      };
    
      const trackInput = enteredValue => {
        setValueEntered(enteredValue);
      };
    
      const goalDelete = (id, goalDeleted) => {
        const newGoalSet = goalsList.filter(eachGoal => eachGoal.id !== id);
        setGoalsList(newGoalSet);
        const goalDel = {
          id: goalsList.length + 1,
          goal: goalDeleted,
        };
        setDeletedGoals(prevList => [...prevList, goalDel]);
        setDisplayUndo(true);
        setTimeout(() => {
          setDisplayUndo(false);
        }, 5000); // Adjust duration as needed
      };
    
      const undoDelete = () => {
        setGoalsList(prevList => [...prevList, deletedGoals.pop()]);
        setDeletedGoals([...deletedGoals]); // Force re-render
        setDisplayUndo(false);
      };
    
      const toggleCancel = (index) => {
        const updatedCancel = [...showCancel];
        updatedCancel[index] = !updatedCancel[index];
        setShowCancel(updatedCancel);
      };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Add your daily goals</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add your goal..."
            style={styles.textInput}
            onChangeText={trackInput}
            value={valueEntered} // Controlled component
          />
          <Button title="Add goal" onPress={handleAddGoal} />
        </View>

        <View style={styles.divider}></View>

        <View style={styles.goalsContainer}>
          <ScrollView style={{ flexDirection: 'column', gap: 3 }}>
            {goalsList.map((eachGoal, index) => (
              <TouchableOpacity key={eachGoal.id} style={styles.taskList} onPress={() => toggleCancel(index + 1)}>
                <Text style={styles.goal}>
                  {index + 1 }. {eachGoal.goal}
                </Text>
                <TouchableOpacity onPress={() => goalDelete(eachGoal.id, eachGoal.goal)}>
                  {showCancel[index + 1] && <Text style={styles.cancelGoal}>X</Text>}
                </TouchableOpacity>
                <Icon name="refresh" size={20} color="#900" />
              </TouchableOpacity>
              
            ))}
          </ScrollView>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={displayUndo}
          onRequestClose={() => setDisplayUndo(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Goal Deleted</Text>
              <Button title="Undo" onPress={undoDelete} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    content: {
      width: "100%",
      alignItems: "center",
      paddingTop: 70,
      paddingHorizontal: 20,
    },
    title: {
      color: "gray",
      fontWeight: "900",
      paddingBottom: 15,
    },
    inputContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15,
    },
    textInput: {
      borderColor: "#cccccc",
      width: "70%",
      padding: 6,
      borderWidth: 1,
      paddingLeft: 10,
      marginRight: 10,
    },
    divider: {
      borderBottomWidth: 3,
      width: "95%",
      borderColor: "gray",
      marginBottom: 20,
      borderStyle: "dashed",
    },
    goalsContainer: {
      width: "100%",
      flexDirection: "column",
      gap: 4,
    },
    goal: {
      marginVertical: 5,
    },
  
    taskList: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#f1f2f2",
      color: "white",
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginVertical: 3,
      alignItems: "center",
      borderRadius: 3
    },
  
    cancelGoal: {
      width: 10,
      height: 10,
      backgroundColor: "#40abf2",
      width: 20,
      height: 20,
      textAlign: "center",
    },
  
    // Modal styles
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
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

export default GoalAdder