package com.pos_system.backend.service;

import com.pos_system.backend.model.User;

import java.util.List;

public interface IUserService {
    public List<User> getUsers();
    public void saveUser(User user);
    public void deleteuser(Long id);
    public User findUser(Long id);
    //public void editUser(...);
}
