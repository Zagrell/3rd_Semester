package main.paintings.models;

import lombok.Data;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Table(name = "paintings")
@Entity
public class Painting {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column
    private String artist;

    @Column
    private double price;

    @Column
    private String title;

    @Column
    private String genre;

    @Column
    private int year;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(name = "paintings_artists",
            joinColumns = {
                    @JoinColumn(name = "paintings_id", referencedColumnName = "id",
                            nullable = true, updatable = true)
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "artists_id", referencedColumnName = "id",
                            nullable = true, updatable = true)
            }
    )
    private List<Artist> artists;

}