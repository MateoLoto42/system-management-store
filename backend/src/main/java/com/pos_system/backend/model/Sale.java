package com.pos_system.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter @Getter
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "bill_num")
    private int billNum;
    @Column(name = "date")
    private LocalDate date;
    @Column(name = "total")
    private int total;

    //RELACION MUCHOS A UNO CON USUARIO
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    //RELACION UNO A MUCHOS CON DETALLE VENTA
    @OneToMany(mappedBy = "sale",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<SaleDetail> details = new ArrayList<>();

}
