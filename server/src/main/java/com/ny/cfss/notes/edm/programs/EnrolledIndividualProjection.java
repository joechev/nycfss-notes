package com.ny.cfss.notes.edm.programs;

import com.ny.cfss.notes.edm.DomainEntityProjection;
import com.ny.cfss.notes.edm.individual.Individual;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "enrolledIndividual", types = Enrollment.class)
public interface EnrolledIndividualProjection extends DomainEntityProjection {

    Program getProgram();
    Individual getIndividual();

}
