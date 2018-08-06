package com.ny.cfss.notes

import org.junit.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ContextLoadsTest extends NotesApplicationTests {

    @Test
    void contextLoads() {
        assert true
    }

}
