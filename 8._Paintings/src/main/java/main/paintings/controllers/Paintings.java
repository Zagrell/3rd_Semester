package main.paintings.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import main.paintings.dto.ArtistDTO;
import main.paintings.models.Artist;
import main.paintings.models.Painting;
import main.paintings.repositories.ArtistsRepo;
import main.paintings.repositories.PaintingRepository;
import main.paintings.services.PaintingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Paintings {

    @Autowired
    PaintingRepository paintings;

    @Autowired
    ArtistsRepo artistsRepo;

    @Autowired
    PaintingService paintingService;

    @GetMapping("/helloWorld")
    public String helloWorld(){
        return paintingService.returnHelloWorld();
    }

    @GetMapping("/paintings")
    public Iterable<Painting> getPaintings() {
        return paintings.findAll();
    }

    @GetMapping("/paintings/{id}")
    public Painting getPainting(@PathVariable Long id) {
        return paintings.findById(id).get();
    }

    @GetMapping("/paintings/timeline")
    public List<Painting> getPaintingsByArtistAndYear(@RequestParam String artist, @RequestParam int year){
        return paintings.findPaintingsByArtistAndYear(artist,year);
    }


    @PostMapping("/paintings")
    public Painting addPainting(@RequestBody String body) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

        Painting newPainting = mapper.readValue(body, Painting.class);

        List<Long> artistIds = mapper.readValue(body, ArtistDTO.class).artistIds;

        List<Artist> foundArtists = (List<Artist>) artistsRepo.findAllById(artistIds);

        newPainting.setArtists(foundArtists);



        // don't allow the client to overwrite the id
       // newPainting.setId(null);
        return paintings.save(newPainting);
    }

    @PutMapping("/paintings/{id}")
    public String updatePaintingById(@PathVariable Long id, @RequestBody Painting paintingToUpdateWith) {
        if (paintings.existsById(id)) {
            paintingToUpdateWith.setId(id);
            paintings.save(paintingToUpdateWith);
            return "Painting was created";
        } else {
            return "Painting not found";
        }
    }

    @DeleteMapping("/paintings/{id}")
    public void deletePaintingById(@PathVariable Long id) {
        paintings.deleteById(id);
    }
}
