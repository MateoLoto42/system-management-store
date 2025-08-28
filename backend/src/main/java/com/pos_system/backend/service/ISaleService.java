package com.pos_system.backend.service;

import com.pos_system.backend.model.Sale;

import java.util.List;

public interface ISaleService {
    public List<Sale> getSales();
    public void saveSale(Sale sale);
    public void deleteSale(Long id);
    public Sale findSale(Long id);
    //public void editSale(...);

}
