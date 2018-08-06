package com.ny.cfss.notes.edm.refdata;

import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@Data
public abstract class RefData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

}
