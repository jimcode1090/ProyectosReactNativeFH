import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../../../config'
import { useProfileStore } from '../../store/profile-store'

export function ProfileScreen() {

  const name = useProfileStore( state => state.name)
  const email = useProfileStore( state => state.email)
  const changeProfile = useProfileStore( state => state.changeProfile)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ name }</Text>
      <Text style={styles.title}>{ email }</Text>
      <Pressable 
        style={styles.primaryButton}
        onPress={ () => useProfileStore.setState({name: 'Luis felipe'})}
        >
        <Text>Cambinar nombre</Text>
      </Pressable>

      <Pressable 
        style={styles.primaryButton}
        onPress={ () => useProfileStore.setState({email: 'luis@gmail.com'})}
        >
        <Text>Cambinar nombre</Text>
      </Pressable>

      <Pressable 
        style={styles.primaryButton}
        onPress={ () => changeProfile('Jimmy Niels', 'jimmypaytan10@gmail.com')}
        >
        <Text>Regresar Valor por Defecto</Text>
      </Pressable>

    </View>
  )
}