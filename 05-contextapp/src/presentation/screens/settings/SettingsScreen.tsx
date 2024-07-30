import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../../../config'
import { useCounterStore } from '../../store/counter-store'
import { useNavigation } from '@react-navigation/native'

export function SettingsScreen() {

  const count = useCounterStore( state => state.count)
  const increaseBy = useCounterStore( state => state.incrementBy)
  const decreaseBy = useCounterStore( state => state.decrementBy)
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: `Count: ${count}`})
  }, [count])
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: { count }</Text>
      <Pressable 
        style={styles.primaryButton}
        onPress={ () => increaseBy(1)}
        >
        <Text>+ 1</Text>
      </Pressable>
      <Pressable 
        style={styles.primaryButton}
        onPress={ () => decreaseBy(1)}
        >
        <Text>- 1</Text>
      </Pressable>
    </View>
  )
}