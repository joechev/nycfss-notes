package com.ny.cfss.notes.edm.refdata.location;

import com.ny.cfss.notes.edm.refdata.RefData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "locations")
@Data
@EqualsAndHashCode(callSuper = true)
public class Location extends RefData {

    private String name;

}
