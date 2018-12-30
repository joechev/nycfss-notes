package com.ny.cfss.notes.edm.individual;

import com.ny.cfss.notes.edm.AbstractRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "individuals", path = "individuals")
public interface IndividualRepository extends AbstractRepository<Individual> {
}
