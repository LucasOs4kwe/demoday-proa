package br.com.ciclix.demo.repository;

import br.com.ciclix.demo.model.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Long> {
	Role findByRole(String role);
}
