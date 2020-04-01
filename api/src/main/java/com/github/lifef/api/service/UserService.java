package com.github.lifef.api.service;

import com.github.lifef.api.dal.UserRepository;
import com.github.lifef.api.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserModel> getAllUsers() {
        List<UserModel> allUsers = userRepository.findAll();
        return allUsers;
    }

    public Optional<UserModel> getUserById(String userId) {
        Optional<UserModel> user= userRepository.findById(userId);
        return user;
    }

    public UserModel addNewUser(UserModel user) {
        List<UserModel> allUsers = userRepository.findAll();
        UserModel newUser = userRepository.save(user);
        return newUser;
    }

    public UserModel getUserByUsername(String username) {
        UserModel user = userRepository.findUserModelByUsername(username);
        return user;
    }
}
