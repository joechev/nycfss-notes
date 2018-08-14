package com.ny.cfss.notes.edm.client;

import com.ny.cfss.notes.edm.AbstractRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "clients", path = "api/clients")
public interface ClientRepository extends AbstractRepository<Client> {
}
