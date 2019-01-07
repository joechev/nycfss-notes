package com.ny.cfss.notes.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequestScope
public class GoogleApiServiceImpl implements GoogleApiService {

    private static final Logger logger = LoggerFactory.getLogger(GoogleApiServiceImpl.class);

    private final RestTemplate restTemplate;
    private final OAuth2ClientContext oAuth2ClientContext;

    public GoogleApiServiceImpl(OAuth2ClientContext oAuth2ClientContext) {
        this.restTemplate = new RestTemplate();
        this.oAuth2ClientContext = oAuth2ClientContext;
    }

    @Override
    public List<JsonNode> getStaff(OAuth2Authentication auth) {
        try {
            final URI uri = UriComponentsBuilder
                    .newInstance()
                    .scheme("https")
                    .host("www.googleapis.com")
                    .path("/admin/directory/v1/users")
                    .queryParam("domain", "nycfss.org")
                    .build()
                    .toUri();
            final RequestEntity entity = RequestEntity
                    .get(uri)
                    .accept(MediaType.APPLICATION_JSON)
                    .header("Authorization", String.format("Bearer %s", oAuth2ClientContext.getAccessToken().getValue()))
                    .build();
            final ObjectNode resp = restTemplate
                    .exchange(entity, ObjectNode.class)
                    .getBody();
            final List<JsonNode> toRet = new ArrayList<>();
            Optional
                    .ofNullable(resp)
                    .map(r -> r.get("users"))
                    .map(ArrayNode.class::cast)
                    .ifPresent(u -> u.elements().forEachRemaining(toRet::add));
            return toRet;
        } catch(HttpClientErrorException e) {
            final String resp = e.getResponseBodyAsString();
            logger.error(resp);
            return Collections.emptyList();
        } catch(Exception e) {
            throw new RuntimeException("Failed to get staff: " + e.getMessage(), e);
        }
    }

}
