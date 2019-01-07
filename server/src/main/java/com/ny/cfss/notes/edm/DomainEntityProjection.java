package com.ny.cfss.notes.edm;

import java.time.LocalDateTime;

public interface DomainEntityProjection {

    String getId();
    LocalDateTime getCreTimest();
    LocalDateTime getModTimest();
    Boolean getActive();

}
