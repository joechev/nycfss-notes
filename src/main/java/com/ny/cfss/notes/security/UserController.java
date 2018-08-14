package com.ny.cfss.notes.security;

import com.ny.cfss.notes.edm.staff.Staff;
import com.ny.cfss.notes.edm.staff.StaffRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/api/staff/me")
@RequiredArgsConstructor
public class UserController {

    private static final String INVALID_DOMAIN = "The email %s is not valid; user must be an nycfss.com user!";

    private final StaffRepository staffRepository;

    @GetMapping
    public Principal user(Principal principal) {
        if(principal instanceof OAuth2Authentication) {
            final OAuth2Authentication auth = (OAuth2Authentication) principal;
            final Map<?, ?> details = (Map<?, ?>) auth.getUserAuthentication().getDetails();
            final String email = (String) details.get("email");
            Staff staff = staffRepository.findByEmail(email);
            if(staff == null) {
                staff = new Staff();
                staff.setEmail(email);
                staffRepository.save(staff);
            }
        }
        return principal;
    }

}
