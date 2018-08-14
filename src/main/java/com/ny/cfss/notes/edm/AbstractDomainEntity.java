package com.ny.cfss.notes.edm;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@MappedSuperclass
@Data
public abstract class AbstractDomainEntity {

    @Id
    @Column(updatable = false, unique = true, nullable = false, columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(nullable = false, updatable = false, columnDefinition = "DATETIME(3) NOT NULL")
    private LocalDateTime creTimest;

    @Column(columnDefinition = "DATETIME(3)")
    private LocalDateTime modTimest;

    @Column(nullable = false)
    private Boolean active;

    @PrePersist
    public void prePersist() {
        this.creTimest = LocalDateTime.now();
        this.active = true;
        this.id = generateUUID();
    }

    @PreUpdate
    public void preUpdate() {
        this.modTimest = LocalDateTime.now();
    }

    protected UUID generateUUID() {
        return UUID.randomUUID();
    }

}
