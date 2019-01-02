package com.ny.cfss.notes.api

import com.ny.cfss.notes.NotesApplicationTests
import com.ny.cfss.notes.edm.individual.IndividualRepository
import groovy.json.JsonOutput
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.result.MockMvcResultHandlers

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@ActiveProfiles("api-test")
@AutoConfigureMockMvc
class IndividualTest extends NotesApplicationTests {

    @Autowired
    MockMvc mockMvc

    @Autowired
    IndividualRepository individualRepository

    def joe = JsonOutput.toJson([
            firstName: 'Joe',
            middleName: 'M',
            lastName: 'Chiavaroli'
    ])

    @Before
    void init() {
        individualRepository.deleteAll()
    }

    @Test
    void 'Should create individual successfully'() {
        mockMvc.perform(post("/individuals").content(joe))
                .andExpect(status().isCreated())
    }

    @Test
    void 'Should create and retrieve successfully'() {
        def loc = mockMvc.perform(post("/individuals").content(joe))
                .andExpect(status().isCreated())
                .andReturn().response.getHeader('Location')

        mockMvc.perform(get(loc)).andExpect(status().isOk())
                .andExpect(jsonPath('$.firstName').value("Joe"))
                .andExpect(jsonPath('$.middleName').value("M"))
                .andExpect(jsonPath('$.lastName').value("Chiavaroli"))
    }

    @Test
    void 'Should create and list successfully'() {
        mockMvc.perform(post("/individuals").content(joe))
                .andExpect(status().isCreated())

        mockMvc.perform(get('/individuals')).andDo(MockMvcResultHandlers.print()).andExpect(status().isOk())
                .andExpect(jsonPath('$._embedded.individuals').isArray())
    }

}
