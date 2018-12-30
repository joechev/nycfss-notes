package com.ny.cfss.notes.api

import com.ny.cfss.notes.NotesApplicationTests
import com.ny.cfss.notes.edm.individual.IndividualRepository
import com.ny.cfss.notes.edm.individual.goal.GoalRepository
import groovy.json.JsonOutput
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.result.MockMvcResultHandlers

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@ActiveProfiles("api-test")
@AutoConfigureMockMvc
class GoalTest extends NotesApplicationTests {

    @Autowired
    MockMvc mockMvc

    @Autowired
    IndividualRepository individualRepository

    @Autowired
    GoalRepository goalRepository

    def joe = JsonOutput.toJson([
            firstName: 'Joe',
            middleName: 'M',
            lastName: 'Chiavaroli'
    ])

    def goalJson = JsonOutput.toJson([description: 'Goal description'])
    String individualLoc

    @Before
    void init() {
        goalRepository.deleteAll()
        individualRepository.deleteAll()
        individualLoc = mockMvc.perform(post("/individuals").content(joe))
                .andExpect(status().isCreated())
                .andReturn().response.getHeader('Location')
    }

    @Test
    void 'Should create goal successfully'() {
        def loc = create()

        mockMvc.perform(put("$loc/individual").contentType('text/uri-list').content(individualLoc))
                .andExpect(status().isNoContent())

        mockMvc.perform(get(loc))
                .andExpect(status().isOk())
                .andExpect(jsonPath('$.description').value("Goal description"))

        mockMvc.perform(get("$individualLoc/goals"))
                .andExpect(status().isOk())
                .andExpect(jsonPath('$._embedded.goals').isArray())

    }

    @Test
    void 'Should create and retrieve successfully'() {
        def loc = create()

        mockMvc.perform(get(loc)).andExpect(status().isOk())
                .andExpect(jsonPath('$.description').value("Goal description"))
    }

    @Test
    void 'Should create and list successfully'() {
        mockMvc.perform(post("/goals").content(goalJson))
                .andExpect(status().isCreated())

        mockMvc.perform(get('/goals')).andDo(MockMvcResultHandlers.print()).andExpect(status().isOk())
                .andExpect(jsonPath('$._embedded.goals').isArray())
    }

    String create() {
        mockMvc.perform(post("/goals").content(goalJson))
                .andExpect(status().isCreated())
                .andReturn().response.getHeader('Location')
    }

}
