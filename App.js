import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo";
import call from "react-native-phone-call";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sales}>
          <Button
            buttonStyle={{
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              height: 150,
              width: 300
            }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["red", "orange"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 }
            }}
            icon={<Icon name="phone" size={35} color="black" />}
            title="Emergency Support"
            type="solid"
            color="black"
            onPress={() => call(args).catch(console.error)}
          />
        </View>
        <View style={styles.row}>
          <Button
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              height: 128,
              width: 128
            }}
            
            titleStyle={{ fontWeight: "bold" }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#50c6da", "#04acd4"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 }
            }}
            icon={<Icon name="person" size={35} color="black" />}
            title="Location"
            type="solid"
            color="black"
          />
        </View>
        <View style={styles.row}>
          <Button
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              height: 128,
              width: 128
            }}
            
            titleStyle={{ fontWeight: "bold" }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#50c6da", "#04acd4"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 }
            }}
            icon={<Icon name="person" size={15} color="black" />}
            title="Rentals"
            type="solid"
            color="black"
          />
        </View>
        <View style={[styles.rowtwo, styles.row]}>
          <Button
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              height: 128,
              width: 128
            }}
            
            titleStyle={{ fontWeight: "bold" }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#50c6da", "#04acd4"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 }
            }}
            icon={<Icon name="person" size={15} color="black" />}
            title="Heat Load"
            type="solid"
            color="black"
          />
        </View>
        <View style={styles.rowtwo}>
          <Button
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              height: 128,
              width: 128
            }}
            
            titleStyle={{ fontWeight: "bold" }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#50c6da", "#04acd4"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 }
            }}
            icon={<Icon name="person" size={15} color="black" />}
            title="Sales"
            type="solid"
            color="black"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey"
  },
  sales: {
    flexDirection: "row"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 2,
    alignItems: "center",
    marginTop: 20
  },
  rowtwo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 2,
    alignItems: "center",
    marginTop: 20
    
  }
});

const args = {
  number: "7136617077",
  prompt: false
};
