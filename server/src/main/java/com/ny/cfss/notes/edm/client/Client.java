package com.ny.cfss.notes.edm.client;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.client.goal.Goal;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "clients")
@Data
@EqualsAndHashCode(callSuper = true)
public class Client extends AbstractDomainEntity {

    @Column(nullable = false)
    private String firstName;

    private String middleName;

    @Column(nullable = false)
    private String lastName;

    @OneToMany(mappedBy = "client")
    private Set<Goal> goals = new HashSet<>();

}
