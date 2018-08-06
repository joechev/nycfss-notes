package com.ny.cfss.notes.edm.refdata.response;

import com.ny.cfss.notes.edm.refdata.RefData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "responseTypes")
@Data
@EqualsAndHashCode(callSuper = true)
public class ResponseType extends RefData {

    private String type;

}
