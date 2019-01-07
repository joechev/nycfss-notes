package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.AbstractRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@RepositoryRestResource(collectionResourceRel = "summaries", path = "summaries")
public interface WeeklySummaryRepository extends AbstractRepository<WeeklySummary> {

    WeeklySummary findByStaffIdAndWeekOf(
            @Param("staffId") String staffId,
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) @Param("weekOf") LocalDate weekOf);

}
