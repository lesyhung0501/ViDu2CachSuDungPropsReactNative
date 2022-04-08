

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Content = (props) => {
  return (
    <View>
      {props.children}
      <Text style={{color: props.color, fontWeight: props.fontWeight, fontSize: props.fontSize, paddingLeft: '28px'}}>{props.content}</Text>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({})