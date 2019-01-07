package com.ny.cfss.notes.security;

import com.fasterxml.jackson.databind.JsonNode;
import com.ny.cfss.notes.edm.staff.Staff;
import com.ny.cfss.notes.edm.staff.StaffRepository;
import com.ny.cfss.notes.service.GoogleApiService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/staff/me")
@RequiredArgsConstructor
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final StaffRepository staffRepository;
    private final GoogleApiService googleApiService;

    @GetMapping
    public Principal user(Principal principal) {
        if(principal instanceof OAuth2Authentication) {
            final OAuth2Authentication auth = (OAuth2Authentication) principal;
            final Map<?, ?> details = (Map<?, ?>) auth.getUserAuthentication().getDetails();
            final String email = (String) details.get("email");
            final Staff staff = staffRepository.findByEmail(email);
            if(staff == null) {
                staffRepository.save(buildStaff(details, email));
            }
            final List<JsonNode> results = googleApiService.getStaff(auth);
            results.forEach(r -> logger.info(r.toString()));
        }
        return principal;
    }

    private static Staff buildStaff(Map details, String email) {
        final Staff staff = new Staff();
        staff.setEmail(email);
        staff.setFirstName((String) details.get("given_name"));
        staff.setLastName((String) details.get("family_name"));
        staff.setPictureUrl((String) details.get("picture"));
        final String[] nameSplit = ((String) details.get("name")).split("\\s");
        if(nameSplit.length > 2) {
            staff.setMiddleName(String.join(" ", Arrays
                    .asList(nameSplit)
                    .subList(1, nameSplit.length - 2)));
        }
        return staff;
    }

}
