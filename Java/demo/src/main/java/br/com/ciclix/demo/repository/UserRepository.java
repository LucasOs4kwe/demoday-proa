package br.com.ciclix.demo.repository;

import br.com.ciclix.demo.model.User;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, Long> {
	User findByUsername(String username);
}
