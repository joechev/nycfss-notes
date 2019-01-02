package com.ny.cfss.notes.api

import com.ny.cfss.notes.NotesApplicationTests
import com.ny.cfss.notes.edm.staff.StaffRepository
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
class StaffTest extends NotesApplicationTests {

    @Autowired
    MockMvc mockMvc

    @Autowired
    StaffRepository staffRepository

    def joe = JsonOutput.toJson([
            firstName: 'Joe',
            middleName: 'M',
            lastName: 'Chiavaroli',
            email: 'jchiavaroli@nycfss.com'
    ])

    @Before
    void init() {
        staffRepository.deleteAll()
    }

    @Test
    void 'Should create staff successfully'() {
        mockMvc.perform(post("/staff").content(joe))
                .andExpect(status().isCreated())
    }

    @Test
    void 'Should create and retrieve successfully'() {
        def loc = mockMvc.perform(post("/staff").content(joe))
                .andExpect(status().isCreated())
                .andReturn().response.getHeader('Location')

        mockMvc.perform(get(loc)).andExpect(status().isOk())
                .andExpect(jsonPath('$.firstName').value("Joe"))
                .andExpect(jsonPath('$.middleName').value("M"))
                .andExpect(jsonPath('$.lastName').value("Chiavaroli"))
                .andExpect(jsonPath('$.email').value("jchiavaroli@nycfss.com"))
    }

    @Test
    void 'Should create and list successfully'() {
        mockMvc.perform(post("/staff").content(joe))
                .andExpect(status().isCreated())

        mockMvc.perform(get('/staff')).andDo(MockMvcResultHandlers.print()).andExpect(status().isOk())
                .andExpect(jsonPath('$._embedded.staff').isArray())
    }

}
