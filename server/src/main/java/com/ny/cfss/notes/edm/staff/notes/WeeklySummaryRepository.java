package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.AbstractRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "summaries", path = "api/summaries")
public interface WeeklySummaryRepository extends AbstractRepository<WeeklySummary> {
}
