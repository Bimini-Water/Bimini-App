package com.company;

import java.util.ArrayList;

/**
 * Created by michaelmernin on 12/13/16.
 */
public class TaxListing {

    double totalRate;
    ArrayList<Tax> rates;
    double total;

    public double getTotal() {
        return total;
    }

    public TaxListing() {
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public TaxListing(double totalRate, ArrayList<Tax> rates) {
        this.totalRate = totalRate;
        this.rates = rates;

    }

    public double getTotalRate() {
        return totalRate;
    }

    public void setTotalRate(double totalRate) {
        this.totalRate = totalRate;
    }

    public ArrayList<Tax> getRates() {
        return rates;
    }

    public void setRates(ArrayList<Tax> rates) {
        this.rates = rates;
    }
}
