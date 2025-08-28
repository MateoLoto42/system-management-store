package com.pos_system.backend.service;

import com.pos_system.backend.model.Sale;
import com.pos_system.backend.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class SaleService implements ISaleService{

    @Autowired
    private SaleRepository saleRepository;

    @Override
    public List<Sale> getSales() {
        return List.of();
    }

    @Override
    public void saveSale(Sale sale) {

    }

    @Override
    public void deleteSale(Long id) {

    }

    @Override
    public Sale findSale(Long id) {
        return null;
    }
}
