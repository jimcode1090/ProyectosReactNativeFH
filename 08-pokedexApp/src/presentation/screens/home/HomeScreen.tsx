
import { useQuery } from '@tanstack/react-query'
import { View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'
import { getPokemons } from '../../../actions'

export const HomeScreen = () => {

  const { isLoading, data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(),
    staleTime: 1000 * 60 * 60, // 60 minutos
  })

  return (
    <View>
        <Text>HomeScreen</Text>
        {
          isLoading ? <ActivityIndicator /> : <Text>{JSON.stringify(data)}</Text>
        }
    </View>
  )
}
