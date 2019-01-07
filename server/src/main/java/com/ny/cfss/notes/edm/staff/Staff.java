package com.ny.cfss.notes.edm.staff;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "staff")
@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class Staff extends AbstractDomainEntity {

    private String firstName;
    private String middleName;
    private String lastName;

    @Column(unique = true, nullable = false)
    private String email;

    private String pictureUrl;

    @Override
    protected String generateUUID() {
        return UUID.nameUUIDFromBytes(email.getBytes()).toString();
    }

}
