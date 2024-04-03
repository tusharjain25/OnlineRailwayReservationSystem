package com.sts.util;

import java.security.Key;
import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

	
 public static final String SECRET = "d41c545f02041cc178f5fbac2587b19f9c576a245ea0a11b28c65ed41606915e";
	 
	 public String extractUsername(String token) {
	        return extractClaim(token, Claims::getSubject);
	    }

	    public Date extractExpiration(String token) {
	        return extractClaim(token, Claims::getExpiration);
	    }

	    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
	        final Claims claims = extractAllClaims(token);
	        return claimsResolver.apply(claims);
	    }

	    private Claims extractAllClaims(String token) {
	        return Jwts
	                .parserBuilder()
	                .setSigningKey(getSignKey())
	                .build()
	                .parseClaimsJws(token)
	                .getBody();
	    }

//	    private Boolean isTokenExpired(String token) {
//	        return extractExpiration(token).before(new Date());
//	    }

//	    public Boolean validateToken(String token, String username) {
//	        username = extractUsername(token);
//	        return (username.equals(username) && !isTokenExpired(token));
//	    }
	    public void validateToken(final String token) {
	        Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token);
	    }


//	 
//	 public String generateToken(UserDetails userDetails){
//	        Map<String,Object> claims=new HashMap<>();
//	        return createToken(claims,userDetails.getUsername());
//	    }
	 
//	 private String createToken(Map<String, Object> claims, String username) {
//	        return Jwts.builder()
//	                .setClaims(claims)
//	                .setSubject(username)
//	                .setIssuedAt(new Date(System.currentTimeMillis()))
//	                .setExpiration(new Date(System.currentTimeMillis()+1000*60*30))
//	                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
//	    }

	    private Key getSignKey() {
	        byte[] keyBytes= Decoders.BASE64.decode(SECRET);
	        return Keys.hmacShaKeyFor(keyBytes);
	    }
}
