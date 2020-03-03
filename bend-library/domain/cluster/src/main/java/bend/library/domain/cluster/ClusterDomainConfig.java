package bend.library.domain.cluster;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * This is the boot-configuration for domain module, which is used to search component's from
 * it's bootstrap path and associate all child packages.
 *
 * Here cluster means different database configuration cluster and that module will contain all
 * configuration
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/7/2020
 */
@Configuration
@ComponentScan("bend.library.domain.cluster")
@EnableJpaRepositories(
        basePackages = {"bend.library.domain.cluster.repositories"}
        , entityManagerFactoryRef = "bendEntityManager"
        , transactionManagerRef = "bendTransactionManager"
)
public class ClusterDomainConfig {
}