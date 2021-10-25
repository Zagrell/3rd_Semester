package main.paintings.controllers;

import main.paintings.models.Artist;
import main.paintings.repositories.ArtistsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class Artists {

    @Autowired
    ArtistsRepo repo;


    @GetMapping("/artists")
    public Iterable<Artist> getArtists(){
        return repo.findAll();
    }

    @GetMapping("/artists/{id}")
    public Artist getArtist(@PathVariable Long id){
        return repo.findById(id).get();
    }

    @PostMapping("/artists")
    public Artist addArtist(@RequestBody Artist artist){
        return repo.save(artist);
    }

    @PostMapping("/artists/paintings/{id}")
    public Artist addPaintingToArtist(){
        return null;
    }

    @PostMapping("/artists/gallery/{artistId}/{paintingId}")
    public Artist addGalleryToArtist(@PathVariable long paintingId,@PathVariable long artistId){
        Artist artist = repo.findById(artistId).get();


        return null;
    }

    @PutMapping("/artists/{id}")
    public Artist setArtist(@PathVariable Long id, @RequestBody Artist artist){
        artist.setId(id);
        return repo.save(artist);
    }

    @DeleteMapping("/artists/{id}")
    public void removeArtist(@PathVariable Long id){
        repo.deleteById(id);
    }

}
