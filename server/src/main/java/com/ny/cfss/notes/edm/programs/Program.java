package com.ny.cfss.notes.edm.programs;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.staff.Staff;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "programs")
@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class Program extends AbstractDomainEntity {

    @OneToOne
    @JoinColumn(name = "staffId")
    private Staff director;

    private String longName;
    private String shortName;
    private Integer minsPerUnit;

}
