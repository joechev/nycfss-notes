package com.ny.cfss.notes.edm.refdata.assistance;

import com.ny.cfss.notes.edm.refdata.RefData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "assistanceTypes")
@Data
@EqualsAndHashCode(callSuper = true)
public class AssistanceType extends RefData {

    private String type;

}
