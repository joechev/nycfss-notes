package com.ny.cfss.notes.edm.staff.notes;

import com.ny.cfss.notes.edm.refdata.RefData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "refNotes")
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class RefNote {

    @Embeddable
    @Data
    static class RefNoteId implements Serializable {
        private Long refDataId;
        private String noteId;
    }

    @EmbeddedId
    private RefNoteId id;

    @ManyToOne
    @MapsId("refDataId")
    private RefData refData;

    @ManyToOne
    @MapsId("noteId")
    private Note note;

    @Lob
    private String refNote;

}
