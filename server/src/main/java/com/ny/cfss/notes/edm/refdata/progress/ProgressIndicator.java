package com.ny.cfss.notes.edm.refdata.progress;

import com.ny.cfss.notes.edm.refdata.RefData;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "progressIndicators")
@Data
@EqualsAndHashCode(callSuper = true)
public class ProgressIndicator extends RefData {

    private String indicator;

}
