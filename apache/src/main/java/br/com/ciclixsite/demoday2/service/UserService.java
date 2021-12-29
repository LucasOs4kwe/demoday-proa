package br.com.ciclixsite.demoday2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ciclixsite.demoday2.domain.User;
import br.com.ciclixsite.demoday2.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repo;
	
	public User login(String username, String password) {
		User user = repo.findByUsernameAndPassword(username, password);
		return user;
	}
}
