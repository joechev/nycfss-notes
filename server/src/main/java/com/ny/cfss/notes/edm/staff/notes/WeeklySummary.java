package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.client.Client;
import com.ny.cfss.notes.edm.client.goal.Goal;
import com.ny.cfss.notes.edm.staff.Staff;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "weeklySummary")
@Data
@EqualsAndHashCode(callSuper = true)
public class WeeklySummary extends AbstractDomainEntity {

    @Column(columnDefinition = "date")
    private LocalDate weekOf;

    private Integer totalHours;
    private Integer totalUnits;

    @Column(columnDefinition = "mediumtext")
    private String description;

    @ManyToOne
    @JoinColumn(name = "staffId")
    private Staff staff;

    @ManyToOne
    @JoinColumn(name = "clientId")
    private Client client;

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
