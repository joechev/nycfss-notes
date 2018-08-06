package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.client.goal.Goal;
import com.ny.cfss.notes.edm.refdata.activity.Activity;
import com.ny.cfss.notes.edm.refdata.assistance.AssistanceType;
import com.ny.cfss.notes.edm.refdata.location.Location;
import com.ny.cfss.notes.edm.refdata.progress.ProgressIndicator;
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
@EqualsAndHashCode(callSuper = true)
public class Note extends AbstractDomainEntity {

    @ManyToOne
    @JoinColumn(name = "summaryId")
    private WeeklySummary weeklySummary;

    @ManyToMany
    @JoinTable(name = "targetedGoals")
    private Set<Goal> targetedGoals = new HashSet<>();

    @Column(columnDefinition = "date")
    private LocalDate serviceDate;

    @Column(columnDefinition = "time")
    private LocalTime startTime;

    @Column(columnDefinition = "time")
    private LocalTime endTime;

    @OneToOne
    @JoinColumn(name = "activityId")
    private Activity activity;
    private String activityNote;

    @OneToOne
    @JoinColumn(name = "progressIndicatorId")
    private ProgressIndicator progressIndicator;
    private String progressIndicatrorNote;

    @ManyToMany
    @JoinTable(name = "serviceAssistance")
    private Set<AssistanceType> assistanceTypes = new HashSet<>();

    @OneToOne
    @JoinColumn(name = "locationId")
    private Location location;
    private String locationNote;

}
