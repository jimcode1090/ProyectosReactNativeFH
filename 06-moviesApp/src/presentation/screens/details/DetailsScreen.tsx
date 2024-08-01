import { View, Text } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigations/Navigation'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movie/MovieHeader'
import { MovieDetails } from '../../components/movie/MovieDetails'
import { ScrollView } from 'react-native-gesture-handler'
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader'


interface Props extends StackScreenProps<RootStackParamList,'Details'>{};

export const DetailsScreen = ({route}: Props) => {

  const { movieId } = route.params;
  const { isLoading, movie, cast = [] } = useMovie(movieId);

  if(isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />
      <MovieDetails
        movie={movie!}
        cast={cast}
      />
    </ScrollView>
  )
}