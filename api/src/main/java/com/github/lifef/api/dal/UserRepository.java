package com.github.lifef.api.dal;

import com.github.lifef.api.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserModel,String> {

    UserModel findUserModelByUsername(String name);
}
