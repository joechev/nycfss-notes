package com.ny.cfss.notes.edm.config;

import com.ny.cfss.notes.edm.staff.Staff;
import com.ny.cfss.notes.edm.staff.StaffRepository;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

@Component
public class CustomEntityLookupConfig extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.withEntityLookup()
                .forRepository(StaffRepository.class, Staff::getEmail, StaffRepository::findByEmail);
    }

}
