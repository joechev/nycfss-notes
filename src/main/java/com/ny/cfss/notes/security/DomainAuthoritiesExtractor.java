package com.ny.cfss.notes.security;

import org.springframework.boot.autoconfigure.security.oauth2.resource.FixedAuthoritiesExtractor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Map;

import static java.util.Collections.emptyList;

@Component
public class DomainAuthoritiesExtractor extends FixedAuthoritiesExtractor {

    private static final String DOMAIN = "@nycfss.org";

    @Override
    public List<GrantedAuthority> extractAuthorities(Map<String, Object> map) {
        final String email = (String) map.get("email");
        if(!StringUtils.hasText(email) || !email.endsWith(DOMAIN)) {
            return emptyList();
        }
        return super.extractAuthorities(map);
    }

}
