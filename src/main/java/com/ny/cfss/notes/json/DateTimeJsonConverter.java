package com.ny.cfss.notes.json;

import org.springframework.boot.jackson.JsonComponent;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@JsonComponent
public class DateTimeJsonConverter {

    public static class LocalDateTimeSerializer extends TemporalSerializer<LocalDateTime> {

        public LocalDateTimeSerializer() {
            super(LocalDateTime.class, DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS"));
        }

    }

    public static class LocalDateSerializer extends TemporalSerializer<LocalDate> {

        public LocalDateSerializer() {
            super(LocalDate.class, DateTimeFormatter.ISO_DATE);
        }

    }

    public static class LocalTimeSerializer extends TemporalSerializer<LocalTime> {

        public LocalTimeSerializer() {
            super(LocalTime.class, DateTimeFormatter.ISO_LOCAL_TIME);
        }

    }

}
