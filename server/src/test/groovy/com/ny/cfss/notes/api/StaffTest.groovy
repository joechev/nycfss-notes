package com.ny.cfss.notes.api

import com.ny.cfss.notes.NotesApplicationTests
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.MediaType
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.result.MockMvcResultHandlers

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*

@ActiveProfiles("api-test")
@WebMvcTest
class StaffTest extends NotesApplicationTests {

    @Autowired
    MockMvc mockMvc

    @Test
    @WithMockUser
    void '[FindOne] Find one endpoint should return no results'() {
        mockMvc.perform(get("/staff")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
    }

}
