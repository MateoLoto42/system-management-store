package com.pos_system.backend.service;

import com.pos_system.backend.model.User;
import com.pos_system.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getUsers() {
        return List.of();
    }

    @Override
    public void saveUser(User user) {

    }

    @Override
    public void deleteuser(Long id) {

    }

    @Override
    public User findUser(Long id) {
        return null;
    }
}
