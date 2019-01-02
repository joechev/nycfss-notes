package com.ny.cfss.notes.edm.programs;

import com.ny.cfss.notes.edm.AbstractRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "enrollments", path = "enrollments")
public interface EnrollmentRepository extends AbstractRepository<Program> {
}
