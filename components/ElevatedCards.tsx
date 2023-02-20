import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    padding: 8,
    marginEnd:10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius:4,
    margin: 8,
    
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation:4,
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'#EF5354',
    shadowOpacity:0.4,
    shadowRadius:2, 

  },

})