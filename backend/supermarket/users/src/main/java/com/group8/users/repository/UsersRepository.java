package com.group8.users.repository;

import com.group8.users.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * This interface is used as a repository  for the Users Service
 * @author Nikhila
 * @version 1.0
 * @since July 2022
 */

@Repository
public interface UsersRepository extends MongoRepository<Users, Integer> {
}
