package com.ny.cfss.notes.api

import com.ny.cfss.notes.NotesApplicationTests
import com.ny.cfss.notes.edm.refdata.RefDataRepository
import com.ny.cfss.notes.edm.refdata.RefDataType
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
class RefDataTest extends NotesApplicationTests {

    @Autowired
    MockMvc mockMvc

    @Autowired
    RefDataRepository refDataRepository

    def ref = JsonOutput.toJson([
            refDataType: RefDataType.Activity.name(),
            fieldName: 'type',
            fieldValue: 'Test Activity'
    ])

    @Before
    void init() {
        refDataRepository.deleteAll()
    }

    @Test
    void 'Should create refData successfully'() {
        mockMvc.perform(post("/refData").content(ref))
                .andExpect(status().isCreated())
    }

    @Test
    void 'Should create and retrieve successfully'() {
        def loc = mockMvc.perform(post("/refData").content(ref))
                .andExpect(status().isCreated())
                .andReturn().response.getHeader('Location')

        mockMvc.perform(get(loc)).andExpect(status().isOk())
                .andExpect(jsonPath('$.refDataType').value(RefDataType.Activity.name()))
                .andExpect(jsonPath('$.fieldName').value("type"))
                .andExpect(jsonPath('$.fieldValue').value("Test Activity"))
    }

    @Test
    void 'Should create and list successfully'() {
        mockMvc.perform(post("/refData").content(ref))
                .andExpect(status().isCreated())

        mockMvc.perform(get('/refData')).andDo(MockMvcResultHandlers.print()).andExpect(status().isOk())
                .andExpect(jsonPath('$._embedded.refData').isArray())
    }

}
