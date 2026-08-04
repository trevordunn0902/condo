package com.condo.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors() // Enable CORS support
            .and()
            .csrf(csrf -> csrf.disable())                  // Disable CSRF
            .authorizeHttpRequests(auth -> auth.anyRequest().permitAll()) // Allow all requests
            .formLogin(form -> form.disable())            // Disable form login
            .httpBasic(httpBasic -> httpBasic.disable())  // Disable basic auth
            .logout(logout -> logout.disable());          // Disable logout endpoints

        return http.build();
    }
}
