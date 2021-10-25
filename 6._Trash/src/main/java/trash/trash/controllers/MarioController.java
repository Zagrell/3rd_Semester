package trash.trash.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import trash.trash.models.SuperMarioCharacter;

@RestController
public class MarioController {

    @GetMapping("/supermario/characters")
    public SuperMarioCharacter mario(){
        return new SuperMarioCharacter("Peach");
    }

}
