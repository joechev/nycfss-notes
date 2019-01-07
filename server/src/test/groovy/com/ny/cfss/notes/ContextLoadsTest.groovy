package com.ny.cfss.notes

import com.fasterxml.jackson.databind.ObjectMapper
import org.junit.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.core.io.ClassPathResource

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ContextLoadsTest extends NotesApplicationTests {

    @Test
    void contextLoads() {
        assert true
    }

    @Test
    void parseJson() {
        def resource = new ClassPathResource('users.json')
        def vals = new ObjectMapper().readValue(resource.inputStream, Wrapper.class)
        def file = new File("/home/jchiavaroli/users.sql")
        if(file.exists()) {
            file.delete()
        }
        def outVal = vals.users.collect { u -> buildLine(u) }.join('\r\n')
        file.write(outVal, 'utf-8')
    }

    static String buildLine(User u) {
        def ins = "insert into staff (id, firstName, lastName, email, personalEmail, pictureUrl) "
        def vals = "values ('${id(u)}', '${u.name.givenName}', '${u.name.familyName}', '${u.primaryEmail}', '${email(u)}', '${pic(u)}');"
        "$ins$vals".toString()
    }

    static class Wrapper {
        List<User> users
    }

    static String id(User u) {
        UUID.nameUUIDFromBytes(u.emails[0].address.bytes).toString()
    }

    static String email(User u) {
        u.emails.findResult { it.primary == null || !it.primary ? it.address : null }
    }

    static String pic(User u) {
        u.thumbnailPhotoUrl
    }

    static class Email {
        String address
        String type
        Boolean primary
    }

    static class Name {
        String givenName
        String familyName
        String fullName
    }

    static class User {
        Object aliases
        Object externalIds
        Object gender
        Object organizations
        String kind
        String id
        String etag
        String primaryEmail
        String isAdmin
        String isDelegatedAdmin
        String lastLoginTime
        String creationTime
        String agreedToTerms
        String suspended
        String archived
        String changePasswordAtNextLogin
        String ipWhitelisted
        String customerId
        String orgUnitPath
        String thumbnailPhotoUrl
        String thumbnailPhotoEtag
        Boolean isMailboxSetup
        Boolean isEnrolledIn2Sv
        Boolean isEnforcedIn2Sv
        Boolean includeInGlobalAddressList
        Name name
        List<Email> emails
    }

}
