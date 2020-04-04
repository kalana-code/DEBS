package com.github.lifef.api.controller;

import com.github.lifef.api.model.AuthenticationRequest;
import com.github.lifef.api.model.AuthenticationRespond;
import com.github.lifef.api.model.UserModel;
import com.github.lifef.api.service.AuthenticationService;
import com.github.lifef.api.service.UserService;
import com.github.lifef.api.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
public class AuthenticationController {

    Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationService userDetailsService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @RequestMapping("/hello")
    public String hello(){
        return "Hello World!";
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken
            (@RequestBody AuthenticationRequest authenticationRequest) throws Exception{

        logger.info("Initiate user authentication process");


        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                            authenticationRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password",e);
        }


        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        // get User
        final UserModel user = userService.getUserByUsername((userDetails.getUsername()));

        // genarate Jwt
        final String jwt = jwtTokenUtil.generateToken(userDetails,user);

        Map<String,String> userData = new HashMap<>();

        // set User information with response body
        userData.put("userName",user.getUsername());
        userData.put("role",user.getRole().toUpperCase());
        userData.put("firstName",user.getFirstName());
        userData.put("lastName",user.getLastName());
        userData.put("userId",user.getUserId());
        userData.put("token",jwt);

        ResponseEntity r1 = new ResponseEntity(userData, HttpStatus.OK);

        return ResponseEntity.ok(r1);
    }
}
