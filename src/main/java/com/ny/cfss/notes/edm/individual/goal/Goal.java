package com.ny.cfss.notes.edm.individual.goal;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.individual.Individual;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Entity
@Table(name = "goals")
@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class Goal extends AbstractDomainEntity {

    @Lob
    private String description;

    @ManyToOne
    @JoinColumn(name = "individualId")
    private Individual individual;

}
