package com.ny.cfss.notes.edm.client.goal;

import com.ny.cfss.notes.edm.AbstractRepository;
import com.ny.cfss.notes.edm.client.Client;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "goals", path = "api/goals")
public interface GoalRepository extends AbstractRepository<Goal> {
}
