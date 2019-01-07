package com.ny.cfss.notes.edm;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractRepository<T extends AbstractDomainEntity> extends JpaRepository<T, String> {
}
