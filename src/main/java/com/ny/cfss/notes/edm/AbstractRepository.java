package com.ny.cfss.notes.edm;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.UUID;

@NoRepositoryBean
public interface AbstractRepository<T extends AbstractDomainEntity> extends JpaRepository<T, UUID> {
}
