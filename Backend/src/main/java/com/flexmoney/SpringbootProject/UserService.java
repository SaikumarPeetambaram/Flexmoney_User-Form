package com.flexmoney.SpringbootProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public User getUserById(Long userId) {
        return (User) userRepository.getUserById(userId);
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User save(User user) {
        // Implement any necessary logic before saving (e.g., validation)
        return userRepository.save(user);
    }

	public boolean checkUserExists(int id) {
		// TODO Auto-generated method stub
		return false;
	}

    // You can define other methods here to retrieve, update, or delete users
}

