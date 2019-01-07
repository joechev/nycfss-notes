DROP TABLE IF EXISTS staff;
CREATE TABLE staff (
    id CHAR(36) NOT NULL PRIMARY KEY,
    email VARCHAR(64) NOT NULL UNIQUE,
    firstName VARCHAR(16) NOT NULL,
    middleName VARCHAR(16),
    lastName VARCHAR(16) NOT NULL,
    creTimest DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    modTimest DATETIME,
    active BIT(1) NOT NULL DEFAULT 1,
    KEY (firstName) USING BTREE,
    KEY (lastName) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS individuals;
CREATE TABLE individuals (
    id CHAR(36) NOT NULL PRIMARY KEY,
    firstName VARCHAR(16) NOT NULL,
    middleName VARCHAR(16),
    lastName VARCHAR(16) NOT NULL,
    creTimest DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    modTimest DATETIME,
    active BIT(1) NOT NULL DEFAULT 1,
    KEY (firstName) USING BTREE,
    KEY (lastName) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS goals;
CREATE TABLE goals (
    id CHAR(36) NOT NULL PRIMARY KEY,
    individualId CHAR(36) NOT NULL,
    description MEDIUMTEXT,
    creTimest DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    modTimest DATETIME,
    active BIT(1) NOT NULL DEFAULT 1,
    FOREIGN KEY (individualId) REFERENCES individuals (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS programs;
CREATE TABLE programs (
    id CHAR(36) NOT NULL PRIMARY KEY,
    staffId CHAR(36) NOT NULL,
    longName VARCHAR(64) NOT NULL UNIQUE,
    shortName VARCHAR(16) NOT NULL UNIQUE,
    creTimest DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    modTimest DATETIME,
    active BIT(1) NOT NULL DEFAULT 1,
    FOREIGN KEY (staffId) REFERENCES staff (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS enrollments;
CREATE TABLE enrollments (
    id CHAR(36) NOT NULL PRIMARY KEY,
    programId CHAR(36) NOT NULL,
    individualId CHAR(36) NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE,
    creTimest DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    modTimest DATETIME,
    active BIT(1) NOT NULL DEFAULT 1,
    FOREIGN KEY (programId) REFERENCES programs (id),
    FOREIGN KEY (individualId) REFERENCES individuals (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS refData;
CREATE TABLE refData (
    id BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    refDataType VARCHAR(16) NOT NULL,
    fieldName VARCHAR(16) NOT NULL,
    fieldValue VARCHAR(32) NOT NULL,
    UNIQUE KEY (refDataType, fieldName, fieldValue) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS weeklySummaries;
CREATE TABLE weeklySummaries (
    id CHAR(36) NOT NULL PRIMARY KEY,
    staffId CHAR(36) NOT NULL,
    programId CHAR(36) NOT NULL,
    weekOf DATE NOT NULL,
    description MEDIUMTEXT,
    creTimest DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    modTimest DATETIME,
    active BIT(1) NOT NULL DEFAULT 1,
    FOREIGN KEY (staffId) REFERENCES staff (id),
    FOREIGN KEY (programId) REFERENCES programs (id),
    UNIQUE KEY (staffId, weekOf) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS notes;
CREATE TABLE notes (
    id CHAR(36) NOT NULL PRIMARY KEY,
    individualId CHAR(36) NOT NULL,
    summaryId CHAR(36) NOT NULL,
    serviceDate DATE NOT NULL,
    startTime TIME NOT NULL,
    endTime TIME NOT NULL,
    creTimest DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    modTimest DATETIME,
    active BIT(1) NOT NULL DEFAULT 1,
    FOREIGN KEY (individualId) REFERENCES individuals (id),
    FOREIGN KEY (summaryId) REFERENCES weeklySummaries (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS refNotes;
CREATE TABLE refNotes (
    refDataId BIGINT(20) NOT NULL,
    noteId CHAR(36) NOT NULL,
    refNote MEDIUMTEXT,
    PRIMARY KEY (refDataId, noteId),
    FOREIGN KEY (refDataId) REFERENCES refData (id),
    FOREIGN KEY (noteId) REFERENCES notes (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;