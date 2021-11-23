package main.paintings;

import main.paintings.models.Artist;
import main.paintings.services.PaintingService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PaintingsTests {

    @LocalServerPort
    int port;

    @Autowired
    PaintingService service;

    @Autowired
    TestRestTemplate restTemplate;



    @Test
    public void paintingUnitTest(){
        assertThat(service.returnHelloWorld()).isEqualTo("Hello World");
    }

    @Test
    public void paintingsTemplateTest(){
        ResponseEntity<String> response = restTemplate.getForEntity("http://localhost:" + port + "/helloWorld", String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo("Hello World");


        /*
        ResponseEntity<Artist> responseArtist = restTemplate.getForEntity("http://localhost:" + port + "/artists/1", Artist.class);
        assertThat(responseArtist.getBody().getId()).isEqualTo(1);
        */
    }


}
