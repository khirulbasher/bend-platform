package bend.library.config.database;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.config.security.registry.ClusterDatabaseRegistry;
import bend.library.config.security.registry.enumeretion.RegistryDetectionType;
import bend.library.config.security.util.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor
public class RoutingDataSource extends AbstractRoutingDataSource {
    private final ClusterDatabaseRegistry clusterDatabaseRegistry;

    @Override
    protected Object determineCurrentLookupKey() {
        return BendOptional.ofNullable(SecurityUtil.extractFromPrincipal())
                .ifThenMap(Objects::nonNull, efp -> efp
                        .and(CustomUserDetails::getRegistryDetectionType)
                        .and(CustomUserDetails::getRegistryDetectionValue).extract())
                .ifThenMap(Objects::nonNull, list -> determineLookupKey((RegistryDetectionType) ((List<?>) list).get(0), ((List<?>) list).get(1).toString()))
                .ifThenMap(Objects::isNull, list -> clusterDatabaseRegistry.defaultDataSourceKey())
                .get();
    }

    private Object determineLookupKey(final RegistryDetectionType registryDetectionType, final String registryDetectionValue) {
        return this.clusterDatabaseRegistry.findAppropriateDatabase(registryDetectionValue, registryDetectionType);
    }
}
