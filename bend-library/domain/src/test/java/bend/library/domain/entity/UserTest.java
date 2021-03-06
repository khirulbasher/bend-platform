package bend.library.domain.entity;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.service.AuthorityService;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.constant.ProfileConstants;
import bend.library.domain.DomainConfig;
import bend.library.domain.repositories.UserRepository;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.fail;

@Tag(ProfileConstants.TestInclude.NOT_RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, DomainConfig.class, SecurityConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class UserTest {

    private static final String USERNAME = "test-username";
    private static final String PASSWORD = "test-password";
    private static final String EMAIL = "test.mail@nomail.com";
    private static final String[] AUTHORITIES = {"ROLE_USER", "ROLE_ADMIN"};
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SaltedPasswordEncoder saltedPasswordEncoder;
    @Autowired
    private AuthorityService authorityService;

    @Test
    public void save() {

        Optional<User> optionalUser = userRepository.findByUsernameAndActive(USERNAME, true);
        optionalUser.ifPresent(user -> userRepository.deleteById(user.getId()));
        User user = new User(USERNAME, saltedPasswordEncoder.encode(USERNAME, PASSWORD), EMAIL, authorityService.validRawAuthorities(AUTHORITIES));
        user.setActive(true);
        user.setCreateDate(LocalDate.now());
        user.setCreateBy(new User(BigInteger.ONE));
        userRepository.save(user);
        if (userRepository.findByUsernameAndActive(USERNAME, true).isEmpty())
            fail();
    }

}
