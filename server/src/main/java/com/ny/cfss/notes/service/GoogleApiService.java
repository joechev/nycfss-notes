package com.ny.cfss.notes.service;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.security.oauth2.provider.OAuth2Authentication;

import java.util.List;

public interface GoogleApiService {

    List<JsonNode> getStaff(OAuth2Authentication auth);

}
