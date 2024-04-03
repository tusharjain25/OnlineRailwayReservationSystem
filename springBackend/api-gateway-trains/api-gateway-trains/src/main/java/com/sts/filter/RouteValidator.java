package com.sts.filter;

import java.util.List;

import java.util.function.Predicate;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

@Component
public class RouteValidator {

	//bypassing the api's from gateway
	 public static final List<String> openApiEndpoints = List.of(
	            "/auth/register",
	            "/auth/token",
	            "/eureka",
	            "/api-docs",
	            "/trains/search-train",
	            "/trains/number"
	    );

	    public Predicate<ServerHttpRequest> isSecured =
	            request -> openApiEndpoints
	                    .stream()
	                    .noneMatch(uri -> request.getURI().getPath().contains(uri));
	            
}
