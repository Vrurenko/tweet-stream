package com.example.twitter;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
public class ChatController {

    @RequestMapping("/api/hi")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<String> hi() {
        return new ArrayList<>() {
            {
                add("One");
                add("Two");
                add("Three ");
            }
        };
    }
}
