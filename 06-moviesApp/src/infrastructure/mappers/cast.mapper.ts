import { Cast } from "../../core/intities/cast.entity";
import { MovieDBCast } from "../interfaces/movie-db.responses";


export class CastMapper {
    static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
                ? `http://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'http://i.stack.imgur.com/l60Hf.png'
        }
    }
}