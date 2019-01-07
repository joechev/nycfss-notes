package com.ny.cfss.notes.edm;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@MappedSuperclass
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public abstract class AbstractDomainEntity {

    @Id
    @EqualsAndHashCode.Include
    private String id;

    private LocalDateTime creTimest;
    private LocalDateTime modTimest;
    private Boolean active;

    @PrePersist
    public void prePersist() {
        this.creTimest = LocalDateTime.now();
        this.active = true;
        this.id = generateUUID();
    }

    public void preUpdate() {
        this.modTimest = LocalDateTime.now();
    }

    protected String generateUUID() {
        return UUID.randomUUID().toString();
    }

}
