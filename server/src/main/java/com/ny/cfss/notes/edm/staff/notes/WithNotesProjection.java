package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.DomainEntityProjection;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDate;
import java.util.Set;

@Projection(name = "withNotes", types = WeeklySummary.class)
public interface WithNotesProjection extends DomainEntityProjection {

    LocalDate getWeekOf();
    Set<WithIndividualProjection> getNotes();

}
