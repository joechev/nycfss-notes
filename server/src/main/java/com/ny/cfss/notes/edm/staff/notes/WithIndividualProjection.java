package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.DomainEntityProjection;
import com.ny.cfss.notes.edm.individual.Individual;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDate;
import java.time.LocalTime;

@Projection(name = "grid", types = Note.class)
public interface WithIndividualProjection extends DomainEntityProjection {

    Individual getIndividual();
    LocalDate getServiceDate();
    LocalTime getStartTime();
    LocalTime getEndTime();

}
