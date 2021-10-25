package handmaven.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MaidController {


     @GetMapping("/")
    public String about(){
         return "this is a restful service";
     }

}
