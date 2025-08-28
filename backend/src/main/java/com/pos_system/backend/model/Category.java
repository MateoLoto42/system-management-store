package com.pos_system.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter @Getter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;

    //RELACION UNO A MUCHOS
    /*
        Una categoria puede tener muchos productos
        OneToMany en Categoria -> "Tengo muchos productos"
        El mappedBy indica que la relacion es bidireccional
        FetchType.Lazy -> Carga perezosa (mejor performance): Los productos se cargan
        solo cuando se accede explicitamente a la lista.
        cascade = CascadeType.ALL -> Operaciones en cascada: Si se borra una categoria se borran
        todos sus productos.
     */
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Product> productList = new ArrayList<>();


}
