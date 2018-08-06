package com.ny.cfss.notes.edm.refdata.activity;

import com.ny.cfss.notes.edm.refdata.RefData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "activities")
@Data
@EqualsAndHashCode(callSuper = true)
public class Activity extends RefData {

    private String type;

}
