package com.github.lifef.api.contrller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class controller {

    @GetMapping("/")
    public String home() {
        return "Kalana";
    }


}
