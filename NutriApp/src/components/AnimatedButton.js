import React, { Component, PureComponent } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  Button,
  Image,
  TouchableOpacity,
  Animated
} from "react-native";

export default class AnimatedButton extends PureComponent {
  state = {
    scale: new Animated.Value(1)
  };
  pressDown = () => {
    Animated.spring(this.state.scale, {
      toValue: 0.92,
      speed: 100,
      useNativeDriver: true
    }).start();
  };
  pressUp = () => {
    Animated.spring(this.state.scale, {
      toValue: 1,
      speed: 100,
      useNativeDriver: true
    }).start();
  };
  render() {
    const {
      label,
      color,
      onPress,
      labelColor,
      border,
      shadowOpacity,
      width
    } = this.props;
    return (
      <TouchableOpacity
        style={{ height: 45, width: width || 160, marginTop: 35 }}
        activeOpacity={1}
        onPress={onPress}
        onPressIn={this.pressDown}
        onPressOut={() => {
          this.pressUp();
          // onPress();
        }}
      >
        <Animated.View
          style={{
            transform: [{ scale: this.state.scale }],
            flex: 1,
            backgroundColor: color,
            borderWidth: border ? 2 : 0,
            borderColor: labelColor,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: shadowOpacity
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: labelColor }}>
            {label}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
