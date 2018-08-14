package com.ny.cfss.notes.edm.client.goal;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.client.Client;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "goals")
@Data
@EqualsAndHashCode(callSuper = true)
public class Goal extends AbstractDomainEntity {

    private String description;

    @ManyToOne
    @JoinColumn(name = "clientId")
    private Client client;

}
