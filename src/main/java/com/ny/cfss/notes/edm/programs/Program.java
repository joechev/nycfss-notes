package com.ny.cfss.notes.edm.programs;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.staff.Staff;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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

    @OneToMany(mappedBy = "program")
    private Set<Enrollment> enrollments = new HashSet<>();

}
