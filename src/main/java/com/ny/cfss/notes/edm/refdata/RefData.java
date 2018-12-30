package com.ny.cfss.notes.edm.refdata;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "refData")
@Data
public class RefData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private RefDataType refDataType;

    private String fieldName;
    private String fieldValue;

}
