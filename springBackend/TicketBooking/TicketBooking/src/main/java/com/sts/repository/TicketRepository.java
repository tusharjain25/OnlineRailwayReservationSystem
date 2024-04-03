package com.sts.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sts.model.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    // Custom queries or methods can be defined here
	Optional<List<Ticket>> findTicketById(int id);
}