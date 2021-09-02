package com.tc.mygames.repository;


import com.tc.mygames.domain.Game;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends MongoRepository<Game, String> {

    public Game findByTitle(String title);
}
