package com.ny.cfss.notes.edm.programs;

import com.ny.cfss.notes.edm.AbstractRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "enrollments", path = "enrollments")
public interface EnrollmentRepository extends AbstractRepository<Enrollment> {

    List<Enrollment> findByProgramId(String programId);

}
