package main.paintings.repositories;
import main.paintings.models.Artist;
import org.springframework.data.repository.CrudRepository;


public interface ArtistsRepo extends CrudRepository<Artist, Long> {

}
