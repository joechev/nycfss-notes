package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.individual.goal.Goal;
import com.ny.cfss.notes.edm.staff.Staff;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "weeklySummaries")
@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class WeeklySummary extends AbstractDomainEntity {

    @Column(columnDefinition = "date")
    private LocalDate weekOf;

    @Column(columnDefinition = "mediumtext")
    private String description;

    @ManyToOne
    @JoinColumn(name = "staffId")
    private Staff staff;

    @ManyToMany
    @JoinTable(name = "weeklyGoals")
    private Set<Goal> goals = new HashSet<>();

    @PrePersist
    @Override
    public void prePersist() {
        super.prePersist();
        if(!this.weekOf.getDayOfWeek().equals(DayOfWeek.SUNDAY)) {
            weekOf = weekOf.plusDays(DayOfWeek.SUNDAY.ordinal() - weekOf.getDayOfWeek().ordinal());
        }
    }

}
