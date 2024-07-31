import { View, Text } from 'react-native'
import React from 'react'
import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PosterCarousel } from '../../components/movies/PosterCarousel'
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel'

export function HomeScreen() {

  const { top } = useSafeAreaInsets()
  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

  if (isLoading) {
    return (<Text>Cargando...</Text>)
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Populares */}
        <HorizontalCarousel
          movies={popular}
          title='Populares'
          loadNextPage={popularNextPage}
        />

        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title='Mejor calificadas' />

        {/* Uncomig */}
        <HorizontalCarousel movies={upcoming} title='Proximamente' />

      </View>
    </ScrollView>
  )
}