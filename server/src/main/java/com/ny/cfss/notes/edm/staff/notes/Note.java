package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.individual.Individual;
import com.ny.cfss.notes.edm.individual.goal.Goal;
import com.ny.cfss.notes.edm.programs.Program;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "notes")
@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class Note extends AbstractDomainEntity {

    @ManyToOne
    @JoinColumn(name = "summaryId")
    private WeeklySummary weeklySummary;

    @ManyToOne
    @JoinColumn(name = "individualId")
    private Individual individual;

    @ManyToOne
    @JoinColumn(name = "programId")
    private Program program;

    @ManyToMany
    @JoinTable(name = "targetedGoals")
    private Set<Goal> targetedGoals = new HashSet<>();

    @Column(columnDefinition = "date")
    private LocalDate serviceDate;

    @Column(columnDefinition = "time")
    private LocalTime startTime;

    @Column(columnDefinition = "time")
    private LocalTime endTime;

    @OneToMany(mappedBy = "note")
    private Set<RefNote> activities = new HashSet<>();

    @OneToMany(mappedBy = "note")
    private Set<RefNote> progressIndicators = new HashSet<>();

    @OneToMany(mappedBy = "note")
    private Set<RefNote> assistanceTypes = new HashSet<>();

    @OneToMany(mappedBy = "note")
    private Set<RefNote> locations = new HashSet<>();

}
