package com.ny.cfss.notes.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.time.format.DateTimeFormatter;
import java.time.temporal.Temporal;

public abstract class TemporalSerializer<T extends Temporal> extends StdSerializer<T> {

    private final DateTimeFormatter formatter;

    TemporalSerializer(Class<T> clazz, DateTimeFormatter formatter) {
        super(clazz);
        this.formatter = formatter;
    }

    @Override
    public void serialize(T value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        String dateString = null;
        if(value!=null) {
            dateString = formatter.format(value);
        }
        gen.writeString(dateString);
    }

}
