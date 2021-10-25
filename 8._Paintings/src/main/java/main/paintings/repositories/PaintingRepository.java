package main.paintings.repositories;

import main.paintings.models.Painting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaintingRepository extends JpaRepository<Painting, Long> {

    List<Painting> findPaintingsByArtistAndYear(String artistName, int year);

    @Query("SELECT p FROM Painting p where p.price > ?1")
    List<Painting> myQuery(double price);

}
