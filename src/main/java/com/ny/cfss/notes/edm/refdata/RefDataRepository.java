package com.ny.cfss.notes.edm.refdata;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "refData", path = "refData")
public interface RefDataRepository extends JpaRepository<RefData, Long> {
}
