import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
    title : "Haze",
    subTitle : 'Today weather is haze'
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#1a2a6c", "#b21f1f", "#fdbb2d"],
    title : "Thunderstorm",
    subTitle : 'Today weather is thunderstorm'
  }, 
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#ff9966", "#ff5e62"],
    title : "Drizzle",
    subTitle : 'Today weather is drizzle'
  },  
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#4DA0B0", "#D39D38"],
    title : "Rain",
    subTitle : 'Today weather is rainny'
  },  
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#74ebd5", "#ACB6E5"],
    title : "Snow",
    subTitle : 'Today weather is snowy'
  },  
  Atmosphere: {
    iconName: "weather-partly-cloudy",
    gradient: ["#03001e", "#7303c0", "#ec38bc", "#fdeff9"],
    title : "Atmosphere",
    subTitle : 'Today weather is atmosphere'
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#fc4a1a", "#f7b733"],
    title : "Clear",
    subTitle : 'Today weather is clear'
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4DA0B0", "#D39D38"],
    title : "Clouds",
    subTitle : 'Today weather is cloudy'
  },
  Smoke: {
    iconName: "weather-hail",
    gradient: ["#6D6027", "#D3CBB8"],
    title : "Smoke",
    subTitle : 'Today weather is smoke'
  },
  Mist: {
    iconName: "weather-partly-rainy",
    gradient: ["#1c92d2", "#f2fcfe"],
    title : "Mist",
    subTitle : 'Today weather is mist'
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title : "Dust",
    subTitle : 'Today weather is dustty'
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
          size={96}
          name={weatherOptions[condition].iconName} 
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle", 
    "Rain", 
    "Snow", 
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Smoke",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp : {
    fontSize: 42,
    color : "white"
  },
  halfContainer : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title : {
    color : "white",
    fontSize: 30
  },
  subTitle : {
    color : "white",
    fontSize: 20
  }
});