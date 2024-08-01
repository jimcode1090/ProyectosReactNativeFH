import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/intities/movie.entity'
import { Formatter } from '../../../config/helpers/formatter'
import { Cast } from '../../../core/intities/cast.entity'
import { FlatList } from 'react-native-gesture-handler'
import { CastActor } from '../cast/CastActor'

interface Props {
    movie: FullMovie
    cast: Cast[]
}

export const MovieDetails = ({ movie, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{movie.rating}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movie.genres.join(', ')}
                    </Text>
                </View>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16, textAlign: 'justify' }}>
                    {movie.description}
                </Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {Formatter.currency(movie.budget)}
                </Text>
            </View>
            {/* Actores */}
            <View style={{ marginTop: 10, marginBottom: 50 }}>
                <Text style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10
                }}
                >
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CastActor actor={item} />}
                />
            </View>

        </>
    )
}
