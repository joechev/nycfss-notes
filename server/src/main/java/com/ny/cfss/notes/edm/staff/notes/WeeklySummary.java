package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.staff.Staff;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.rest.core.annotation.RestResource;

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
    @RestResource(path = "staff", rel = "staff")
    private Staff staff;

    @OneToMany(mappedBy = "weeklySummary")
    private Set<Note> notes = new HashSet<>();

    @Override
    public void prePersist() {
        super.prePersist();
        if(!this.weekOf.getDayOfWeek().equals(DayOfWeek.SUNDAY)) {
            weekOf = weekOf.plusDays(DayOfWeek.SUNDAY.ordinal() - weekOf.getDayOfWeek().ordinal());
        }
    }

}
