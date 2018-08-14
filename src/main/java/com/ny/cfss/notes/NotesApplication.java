package com.ny.cfss.notes;

import com.ny.cfss.notes.edm.AbstractDomainEntity;
import com.ny.cfss.notes.edm.refdata.RefData;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

@SpringBootApplication
@EnableOAuth2Sso
@EntityScan(basePackageClasses = {AbstractDomainEntity.class, RefData.class, Jsr310JpaConverters.class})
public class NotesApplication {

    public static void main(String[] args) {
        SpringApplication.run(NotesApplication.class, args);
    }

}
