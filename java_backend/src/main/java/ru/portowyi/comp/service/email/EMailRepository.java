package ru.portowyi.comp.service.email;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EMailRepository extends JpaRepository<EMail, Long> {
    public EMail findByEmail(String eMail);
    public boolean existsByEmail(String eMail);
}
