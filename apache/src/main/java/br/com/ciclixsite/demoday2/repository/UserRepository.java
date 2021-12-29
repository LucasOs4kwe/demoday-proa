package br.com.ciclixsite.demoday2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ciclixsite.demoday2.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	User findByUsernameAndPassword(String username, String password);
}
