package com.ny.cfss.notes.edm.individual.goal;

import com.ny.cfss.notes.edm.AbstractRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "goals", path = "goals")
public interface GoalRepository extends AbstractRepository<Goal> {
}
