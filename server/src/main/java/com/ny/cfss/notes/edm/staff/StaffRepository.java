package com.ny.cfss.notes.edm.staff;

import com.ny.cfss.notes.edm.AbstractRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "staff", path = "staff")
public interface StaffRepository extends AbstractRepository<Staff> {

    Staff findByEmail(String email);

}
