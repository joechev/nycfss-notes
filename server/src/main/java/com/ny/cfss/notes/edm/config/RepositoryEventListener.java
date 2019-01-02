package com.ny.cfss.notes.edm.config;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

@RepositoryEventHandler
@Component
public class RepositoryEventListener {

    @HandleBeforeCreate
    public <T extends AbstractDomainEntity> void handleEntitySave(T entity) {
        entity.prePersist();
    }

}