package bend.library.config.security.jwt.service;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.data.AccountInfo;
import bend.library.config.security.data.LoginInfo;
import bend.library.config.security.jwt.data.JwtAccountInfo;
import bend.library.config.security.jwt.filter.jwt.JwtAuthenticationFilter;
import bend.library.config.security.service.AuthenticationManager;
import bend.library.config.security.service.AuthenticationService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Objects;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@RequiredArgsConstructor
@Service
public class StandardAuthenticationService implements AuthenticationService {
    private final @NonNull AuthenticationManager authenticationManager;

    @Override
    public ResponseEntity<AccountInfo> authenticate(LoginInfo loginInfo) {
        return BendOptional.ofNullable(authenticationManager.authenticate(loginInfo))
                .mustTrue(Objects::nonNull)
                .map(accountInfo -> new ResponseEntity<>(accountInfo,BendOptional.of(new HttpHeaders()).mustTrue(()->accountInfo instanceof JwtAccountInfo, "Authentication Manager Must Return accountInfo, which is an instance of JwtAccountInfo").insideOperation(header->header.add(JwtAuthenticationFilter.AUTHORIZATION_HEADER, ((JwtAccountInfo)accountInfo).getToken())).get(), HttpStatus.OK)).get();
    }

}