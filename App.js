import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {Button} from "native-base";

var itemArray = new Array(9).fill("empty");


export default function App() {
  var [isCross, setIsCross] = useState(false);
  var [winMessage, setWinMessage] = useState("");

  var drawItem = (itemNumber) => {
    if(itemArray[itemNumber] === 'empty'){
      itemArray[itemNumber] = isCross;
      setIsCross(!itemArray[itemNumber]);
    }
    winGame();
  };

  var chooseItemIcon = (itemNumber) => {
    if(itemArray[itemNumber] !== 'empty'){
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };

  var chooseItemColor = (itemNumber) => {
    if(itemArray[itemNumber] !== 'empty'){
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  };

  var resetGame = () => {
    itemArray.fill("empty");
    setWinMessage("");
    setIsCross(false);
  };

  var winGame = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
        setWinMessage((itemArray[0] ? "Cross" : "Circle").concat(" win "));
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      setWinMessage((itemArray[3] ? "Cross" : "Circle").concat(" win "));
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      setWinMessage((itemArray[6] ? "Cross" : "Circle").concat(" win "));
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      setWinMessage((itemArray[0] ? "Cross" : "Circle").concat(" win "));
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      setWinMessage((itemArray[1] ? "Cross" : "Circle").concat(" win "));
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      setWinMessage((itemArray[2] ? "Cross" : "Circle").concat(" win "));
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      setWinMessage((itemArray[0] ? "Cross" : "Circle").concat(" win "));
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      setWinMessage((itemArray[2] ? "Cross" : "Circle").concat(" win "));
    }

  };

  return (
<View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => drawItem(0)}>
                <Entypo
                  name={chooseItemIcon(0)}
                  size={50}
                  color={chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => drawItem(1)}>
                <Entypo
                  name={chooseItemIcon(1)}
                  size={50}
                  color={chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => drawItem(2)}>
                <Entypo
                  name={chooseItemIcon(2)}
                  size={50}
                  color={chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => drawItem(3)}>
                <Entypo
                  name={chooseItemIcon(3)}
                  size={50}
                  color={chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => drawItem(4)}>
                <Entypo
                  name={chooseItemIcon(4)}
                  size={50}
                  color={chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => drawItem(5)}>
                <Entypo
                  name={chooseItemIcon(5)}
                  size={50}
                  color={chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => drawItem(6)}>
                <Entypo
                  name={chooseItemIcon(6)}
                  size={50}
                  color={chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => drawItem(7)}>
                <Entypo
                  name={chooseItemIcon(7)}
                  size={50}
                  color={chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => drawItem(8)}>
                <Entypo
                  name={chooseItemIcon(8)}
                  size={50}
                  color={chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.winMessage}>{winMessage}</Text>
        <Button onPress={() => resetGame()} full rounded primary style={styles.button}>
          <Text style={styles.btntext}>Reset Game</Text>
        </Button>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {},
  row: {
    flexDirection: "row"
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold"
  },
  button: {
    margin: 20,
    padding: 10
  },
  btntext: {
    color: "#FFF",
    fontWeight: "bold"
  }
});


