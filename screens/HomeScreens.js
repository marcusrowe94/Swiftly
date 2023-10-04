import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from "tailwind-react-native-classnames"
const HomeScreens = () => {
  return (
    <SafeAreaView style={tw `bg-white`} >
    <View>
    <Text style={[tw`text-red-500 p-10`,{
        color: "pink"
        }]}>Swiftly! Pretty much Uber... Let's begin the clone
        </Text>
    </View>

    </SafeAreaView>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
text:{
color: "#00000"
}
})
