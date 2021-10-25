package main.paintings;

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
public class PaintingsTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void helloWorldTemplateTest() {
        ResponseEntity<String> response = restTemplate.getForEntity("http://localhost:" + port + "/helloWorld", String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo("Hello World");
    }

    @Autowired
    private PaintingService paintingService;

    @Test
    public void helloWorldUnitTest(){
        assertThat(paintingService.returnHelloWorld()).isEqualTo("Hello World");

    }

}
