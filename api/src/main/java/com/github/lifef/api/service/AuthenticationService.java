package com.github.lifef.api.service;

import com.github.lifef.api.dal.UserRepository;
import com.github.lifef.api.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AuthenticationService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        try{
            UserModel user = userRepository.findUserModelByUsername(userName);
            return new User(user.getUsername(),user.getPassword(),new ArrayList<>());
        }catch(UsernameNotFoundException e){
            throw new UsernameNotFoundException("Username can not be found",e);
        }
    }
}
