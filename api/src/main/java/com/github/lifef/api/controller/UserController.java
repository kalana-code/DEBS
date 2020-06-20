package com.github.lifef.api.controller;

import com.github.lifef.api.dal.UserRepository;
import com.github.lifef.api.model.UserModel;
import com.github.lifef.api.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    private final Logger LOG = LoggerFactory.getLogger(getClass());
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<UserModel> getAllUsers() {
        LOG.info("Getting all users.");
        return userService.getAllUsers();
    }

    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
    public Optional<UserModel> getUser(@PathVariable String userId) {
        LOG.info("Getting user with ID: {}.", userId);
        return userService.getUserById(userId);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public UserModel addNewUsers(@RequestBody UserModel user) {
        LOG.info("Saving user.");
        return userService.addNewUser(user);
    }

    @RequestMapping(value = "/getUser", method = RequestMethod.POST)
    public UserModel getUserByUsername(@RequestBody UserModel user) {
        LOG.info("Getting user by username.");
        return userService.getUserByUsername(user.getUsername());
    }
}
