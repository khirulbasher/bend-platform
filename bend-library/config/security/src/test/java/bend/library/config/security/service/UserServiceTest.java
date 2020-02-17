package bend.library.config.security.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.domain.DomainConfig;
import bend.library.domain.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import static org.assertj.core.api.Assertions.assertThat;

@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class UserServiceTest {
    @Autowired
    private UserService userService;

    @Test
    public void saveUser() {
        User user = this.userService.saveUser("lemon", "lemon", "ROLE_TEST_USER");
        assertThat(user).isNotNull();
    }
}