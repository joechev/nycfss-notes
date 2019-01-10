package com.ny.cfss.notes;

import com.ny.cfss.notes.edm.individual.Individual;
import com.ny.cfss.notes.edm.individual.goal.Goal;
import com.ny.cfss.notes.edm.programs.Enrollment;
import com.ny.cfss.notes.edm.programs.Program;
import com.ny.cfss.notes.edm.refdata.RefData;
import com.ny.cfss.notes.edm.staff.Staff;
import com.ny.cfss.notes.edm.staff.notes.Note;
import com.ny.cfss.notes.edm.staff.notes.WeeklySummary;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableOAuth2Sso
@RestController
@EntityScan(basePackageClasses = {NotesApplication.class, Jsr310JpaConverters.class})
public class NotesApplication {

    public static void main(String[] args) {
        SpringApplication.run(NotesApplication.class, args);
    }

    @Configuration
    static class RepositoryConfig extends RepositoryRestConfigurerAdapter {

        @Override
        public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
            config.exposeIdsFor(
                    Individual.class, RefData.class,
                    Staff.class, Note.class, Goal.class,
                    WeeklySummary.class, Program.class,
                    Enrollment.class
            );
        }

    }

    @GetMapping("/health")
    public HttpStatus healthCheck() {
        return HttpStatus.OK;
    }

}
